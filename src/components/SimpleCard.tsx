"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

type CardProps = {
  title?: string;
  description?: string;
  buttonText?: string;
};

export function SimpleCard({ title, description, buttonText }: CardProps) {
  return (
    <Card className="my-6 w-96 shadow-none text-black hover:bg-black hover:text-white">
      <CardBody>
        <Typography variant="h5" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>{buttonText}</Button>
      </CardFooter>
    </Card>
  );
}
