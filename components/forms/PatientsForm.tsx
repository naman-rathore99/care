"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomForm from "../CustomForm"


export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON="skeleton"
}


const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})


const PatientsForm = () => {  // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex-1">
                <section className="space-y-4 mb-12">
                    <h1 className="text-24-bold">Hi there, welcome to care</h1>
                    <p className="text-dark-700">Schedule your appointment</p>
                </section>
                <CustomForm
                fieldtype={FormFieldType.INPUT}
                    control={form.control}
                    name="username"
                    lable="Username"
                    placeholder="Enter your username"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="user"
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
  )
}

export default PatientsForm