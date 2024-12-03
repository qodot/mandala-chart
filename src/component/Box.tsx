import useChart from '@/src/hooks/useChart'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '@/src/utils/cn'

type BoxProps = CoreBoxProps | SubBoxProps | ActionBoxProps

type CoreBoxProps = {
  variant: 'core'
  subIdx?: undefined
  actionIdx?: undefined
}

type SubBoxProps = {
  variant: 'sub'
  subIdx: number
  actionIdx?: undefined
}

type ActionBoxProps = {
  variant: 'action'
  subIdx: number
  actionIdx: number
}

export default function Box({ variant, subIdx, actionIdx }: BoxProps) {
  const { chart, changeCore, changeSub, changeAction } = useChart()
  const [isFocus, setIsFocus] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  function autoHeight() {
    textareaRef.current?.style.setProperty('height', 'auto')
    textareaRef.current?.style.setProperty('height', `${textareaRef.current.scrollHeight}px`)
  }

  useEffect(() => {
    autoHeight()
  }, [])

  const value = useMemo(() => {
    if (variant === 'core') {
      return chart.core.title
    }

    if (variant === 'sub') {
      return chart.core.subs[subIdx].title
    }

    if (variant === 'action') {
      return chart.core.subs[subIdx].actions[actionIdx].title
    }
  }, [actionIdx, chart.core.subs, chart.core.title, subIdx, variant])

  const onChange = useCallback(
    ({ title }: { title: string }) => {
      autoHeight()

      if (variant === 'core') {
        changeCore({ title })
      }

      if (variant === 'sub') {
        changeSub({ title, idx: subIdx })
      }

      if (variant === 'action') {
        changeAction({ title, subIdx: subIdx, idx: actionIdx })
      }
    },
    [actionIdx, changeAction, changeCore, changeSub, subIdx, variant]
  )

  const variantKey = `${variant}${isFocus ? 'Focus' : ''}` as const

  const textSize = {
    core: 'text-lg',
    coreFocus: 'text-lg',
    sub: 'text-base',
    subFocus: 'text-base',
    action: 'text-sm',
    actionFocus: 'text-sm',
  }[variantKey]

  const bg = {
    core: 'bg-tertiary',
    coreFocus: 'bg-secondary',
    sub: 'bg-quaternary',
    subFocus: 'bg-tertiary',
    action: 'bg-white',
    actionFocus: 'bg-quaternary',
  }[variantKey]

  const borderWidth = {
    core: 'border-[1px]',
    coreFocus: 'border-[1px]',
    sub: 'border-[0.5px]',
    subFocus: 'border-[0.5px]',
    action: 'border-[0.5px]',
    actionFocus: 'border-[0.5px]',
  }[variantKey]

  const borderColor = {
    core: 'border-black',
    coreFocus: 'border-black',
    sub: 'border-[#DCDCDC]',
    subFocus: 'border-[#DCDCDC]',
    action: 'border-[#DCDCDC]',
    actionFocus: 'border-[#DCDCDC]',
  }[variantKey]

  return (
    <div
      className={cn(
        'flex aspect-square basis-1/3 items-center justify-center rounded-lg',
        textSize,
        bg,
        borderWidth,
        borderColor
      )}
    >
      <textarea
        ref={textareaRef}
        className="max-h-full w-full resize-none overflow-y-hidden bg-transparent text-center"
        rows={1}
        value={value}
        onFocus={(e) => setIsFocus(true)}
        onBlur={(e) => setIsFocus(false)}
        onChange={(e) => onChange({ title: e.target.value })}
      />
    </div>
  )
}
