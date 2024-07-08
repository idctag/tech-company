"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@material-tailwind/react";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  firstName: z.string().min(2).max(50),
  email: z.string().min(2).max(50).email(),
  text: z.string().min(2).max(150),
});

const UserInput = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-[80%]"
      >
        <Typography variant="h3">Contact Us</Typography>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="w-100%" placeholder="Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full"
                    placeholder="first name"
                    {...field}
                  />
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
                <FormControl>
                  <Input className="w-full" placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="w-100%"
                  placeholder="your message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export const Contact = () => {
  return (
    <div className="grid lg:grid-cols-2 w-[100%] justify-center gap-y-3 max-w-[1600px] mx-auto justify-items-center my-24">
      <div className="flex flex-col gap-3 w-[80%]">
        <Typography variant="h2">Who Are We?</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </Typography>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Typography variant="h4">Working Hours</Typography>
            <Typography>
              MONDAY TO FRIDAY: 9AM TO 8PM WEEKEND: 10AM TO 5PM
            </Typography>
          </div>
          <div>
            <Typography variant="h4">Address</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing.
            </Typography>
          </div>
          <div>
            <Typography variant="h4">Email</Typography>
            <Typography>[email]@gmail.com</Typography>
          </div>
          <div>
            <Typography variant="h4">Phone</Typography>
            <Typography>+00(0) 000000000</Typography>
          </div>
        </div>
      </div>
      <UserInput />
    </div>
  );
};
