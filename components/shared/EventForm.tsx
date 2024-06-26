'use client'

import  {zodResolver } from '@hookform/resolvers/zod';
import  { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters."
  }),
})


type EventFormProps = {
  userId: string
  type: "Create" | "Update"
}

const EventForm = ({userId, type}: EventFormProps) => {

 const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    username: "",
  },
 })


 function onSumbit(values: z.infer<typeof formSchema>) {
  console.log(values)
 }

  return (
    <div>
      EventForm {type}
    </div>
  )
}

export default EventForm;
