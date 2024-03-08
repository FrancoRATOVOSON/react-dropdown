import { CarsConstructor, cars } from '@/data'
import * as React from 'react'
import CarDropdown from './CarDropdown'
import { Button } from '../ui/button'

export default function CarSelect() {
  const [constructor, setConstructor] = React.useState<CarsConstructor | undefined>(undefined)
  const [model, setModel] = React.useState<string | undefined>(undefined)
  const modelSelectorRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    if(modelSelectorRef.current)
      modelSelectorRef.current.autofocus = true
  },[])

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-row justify-start items-center gap-4'>
        <CarDropdown
          label='Marque'
          options={Array.from(cars.keys())}
          value={constructor}
          onValueChange={value => {
            setConstructor(value as CarsConstructor)
            setModel(undefined)
            setTimeout(() => {
              modelSelectorRef.current?.focus()
            }, 100);
          }}/>
        <CarDropdown
          label='Modèle'
          options={constructor ? (cars.get(constructor) || []) : []}
          value={model}
          ref={modelSelectorRef}
          onValueChange={value => setModel(value)}/>
      </div>
      <div>
        <p>
          Votre séléction: {constructor && model && <span>{`${constructor} ${model}`}</span>}
        </p>
      </div>
      <div>
        <Button
          variant={'outline'}
          onClick={() => {
            setConstructor(undefined)
            setModel(undefined)
          }}>
            Effacer
        </Button>
      </div>
    </div>
  )
}
