import React from 'react'
import './../../assets/styles/Contactus.scss'
import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { MessageCircle, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
const Contactus = () => {
    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = (data) => {
        console.log("Form submitted:", data);
        // email logic to be written
    };
  return (
    <div className="contact-container" id='contact'>
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className="contact-heading text-3xl font-bold">Contact Me</h2>
                <p className="get-to-know mt-2 mb-4 bg-gradient-to-r from-sky-400 to-slate-50 bg-clip-text text-transparent">
                    Get in touch
                </p>
            </div>
            <div className="contact-grid">
                <div className="contact-info">
                    <Card className="contact-card">
                        <div className="flex item-center justify-center gap-3 mb-4">
                            <MessageCircle className="icon" />
                            <span>Text me</span>
                        </div>
                        <div className="contact-item">
                            <p className="contact-item-heading">Email</p>
                            <p className="font-semibold">bishalkumarnath8@gmail.com</p>
                        </div>
                        <div className="contact-item">
                            <p className="contact-item-heading">WhatsApp</p>
                            <p className="font-semibold">+91-7908741464</p>
                            <Button className="m-0 p-0 " variant="link" onClick={()=> window.open("https://api.whatsapp.com/send?phone=7908741464&text=Hello, more information!","_blank")}>Text me →</Button>
                        </div>
                        <div className="contact-item">
                            <p className="contact-item-heading">Telegram</p>
                            <p className="font-semibold">bknath</p>
                            <Button className="m-0 p-0" variant="link" >Text me →</Button>
                        </div>
                    </Card>
                </div>

                <div className="contact-form">
                    <div className='contact-card'>
                        <div className="flex item-center justify-center gap-3 mb-4">
                            <Send className="icon mt-1" />
                            <span>Have a query for me</span>
                        </div>
                    </div>
                    
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="mb-6">
                                            <FormLabel className="pl-4">Name</FormLabel>
                                            <FormControl className="FormCustom">
                                                <Input placeholder="Your name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="mb-6">
                                            <FormLabel className="pl-4">Email</FormLabel>
                                            <FormControl className="FormCustom">
                                                <Input type="email" placeholder="Your email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem className="mb-6">
                                            <FormLabel className="pl-4">Text</FormLabel>
                                            <FormControl className="FormCustom-txt">
                                                <Textarea placeholder="Ask me something?" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full flex items-center justify-center gap-2" style={{borderRadius:'30px' , fontSize:'18px' , padding:'22px 0px'}}>
                                    Send <Send size={18} />
                                </Button>
                            </form>
                        </Form>
                  
                </div>
            </div>
        </div>
    );
}

export default Contactus
