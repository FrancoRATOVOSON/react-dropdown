import * as React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

interface CarDropdownProps extends React.ComponentPropsWithoutRef<typeof Select>{
  options: Array<string>
  label: string
}

const CarDropdown = React.forwardRef<React.ElementRef<typeof SelectTrigger>,CarDropdownProps>(
  ({value = '', onValueChange, options, label, ...props},ref) => (
    <div>
      <label className='text-sm'>{label}</label>
      <Select onValueChange={onValueChange} value={value} {...props}>
        <SelectTrigger ref={ref} className='w-52'>
          <SelectValue/>
        </SelectTrigger>
        <SelectContent>
          {options && options.map(option => <SelectItem key={option} value={option}>{option}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
))

export default CarDropdown