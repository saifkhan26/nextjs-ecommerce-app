'use client'

export const Textarea = ({ value, setValue, type, label, labelStyles, className, placeholder, containerStyles}) => {
  const baseLabelStyle = 'ms-2 text-sm mb-1'
  const baseInputStyle = 'px-4 py-2 block w-full rounded-md placeholder:text-rich-blue placeholder:opacity-30 resize-none'
  return (
    <div className={containerStyles && containerStyles}>
      <div className={[labelStyles && labelStyles, baseLabelStyle].join(' ')}>
        {label && label}
      </div>
      <textarea type={type} className={[className && className, baseInputStyle ].join(' ')} onChange={(e) => setValue(e.currentTarget.value)} value={value} placeholder={placeholder} />
    </div>
  )
}
