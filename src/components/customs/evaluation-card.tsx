import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import React from "react";
import { currencyRealFormatter } from "@/lib/utils";
import { Progress } from "../ui/progress";

export type EvaluationCardProps = {
  title: string;
  subTitle: string;
  value: number;
  progress: number;
} & React.ComponentProps<typeof Card>;

export function EvaluationCard({
  title,
  subTitle,
  value,
  progress,
  ...rest
}: EvaluationCardProps) {
  return (
    <Card {...rest}>
      <CardHeader className="pb-2">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-2xl">
          {currencyRealFormatter.format(value)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">{subTitle}</div>
      </CardContent>
      <CardFooter>
        <Progress value={progress} />
      </CardFooter>
    </Card>
  );
}
