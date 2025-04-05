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
        // Handle email submission logic here
    };
  return (
    <div className="contact-container">
            <h2 className="text-center text-4xl font-bold">Contact Me</h2>
            <p className="text-center text-gray-400 mb-6">Get in touch</p>

            <div className="contact-grid">
                {/* LEFT SECTION - Contact Info */}
                <div className="contact-info">
                    <Card className="contact-card">
                        <div className="contact-item">
                            <MessageCircle className="icon" />
                            <span>Text me</span>
                        </div>
                        <div className="contact-item">
                            <p className="text-gray-400">Email</p>
                            <p className="font-semibold">bishalkumarnath8@gmail.com</p>
                        </div>
                        <div className="contact-item">
                            <p className="text-gray-400">WhatsApp</p>
                            <p className="font-semibold">+91-7908741464</p>
                            <Button variant="link">Text me →</Button>
                        </div>
                        <div className="contact-item">
                            <p className="text-gray-400">Telegram</p>
                            <p className="font-semibold"></p>
                            <Button variant="link">Text me →</Button>
                        </div>
                    </Card>
                </div>

                <div className="contact-form">
                    <Card className="p-6">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
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
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
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
                                        <FormItem>
                                            <FormLabel>Text</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Ask me something?" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full flex items-center justify-center gap-2">
                                    Send <Send size={18} />
                                </Button>
                            </form>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Contactus
