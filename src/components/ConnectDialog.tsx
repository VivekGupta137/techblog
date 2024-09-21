"use client";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { connectFormSchema } from "@/lib/utils";
import { sendEmail } from "@/actions/emailAction";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const ConnectDialog = () => {
  const form = useForm<z.infer<typeof connectFormSchema>>({
    resolver: zodResolver(connectFormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const [pending, setPending] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const { toast } = useToast();

  async function onSubmit(values: z.infer<typeof connectFormSchema>) {
    console.log("Submitting form with values", values);
    setPending(true);
    const sendEmailWithData = sendEmail.bind(null, values);
    const resp = await sendEmailWithData();
    setPending(false);
    console.log("Response from server", { resp });
    if (resp.success) {
      // setOpenDialog(false);
      toast({
        title: "Email sent successfully",
        description: "Will get back to you soon.",
        action: <FaCheckCircle className="size-5 text-green-600" />,
      });
    } else {
      toast({
        title: "Failed to send email",
        description: resp.error,
        variant: "destructive",
        action: <ImCross />,
      });
    }
  }

  return (
    <Dialog
      open={openDialog}
      onOpenChange={(open) => {
        setOpenDialog(open);
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant="default"
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          Connect
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Let&apos;s connect 🙂</DialogTitle>
          <DialogDescription>Reach out for collaboration, career guidance, or job opportunities.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
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
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={pending} loading={pending}>
                Send email 🚀
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectDialog;
