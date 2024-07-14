import React from "react";
import experienceData from "@/components/root/local-data/experienceData";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { differenceInMonths, parse } from "date-fns";
import _ from "lodash";

export default function Experience() {
  return (
    <section id="experience" className="space-y-4">
      <h3 className="text-xl font-semibold">Experience</h3>
      <div className="grid grid-cols-1 gap-4">
        {experienceData.map((item) => {
          if (!item.toShow) {
            return null;
          }

          return (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle className="text-lg items-center flex gap-3">
                  {item.jobTitle}{" "}
                  {item.current && <Badge variant="outline">Current</Badge>}
                  {item.current ? (
                    <Badge variant="outline">
                      Exp:{" "}
                      {_.divide(
                        differenceInMonths(
                          new Date(),
                          new Date(
                            parse(item.dateOfJoining, "yyyy-MM-dd", new Date())
                          )
                        ),
                        12
                      )}{" "}
                      yrs
                    </Badge>
                  ) : (
                    <Badge variant="outline">
                      Exp:{" "}
                      {_.divide(
                        differenceInMonths(
                          new Date(
                            parse(
                              item.dateOfResigning,
                              "yyyy-MM-dd",
                              new Date()
                            )
                          ),
                          new Date(
                            parse(item.dateOfJoining, "yyyy-MM-dd", new Date())
                          )
                        ),
                        12
                      )}{" "}
                      yrs
                    </Badge>
                  )}
                </CardTitle>

                <div className="space-y-4">
                  <p className="mb-2 dark:text-primary text-gray-600 text-sm">
                    {item.company}
                  </p>
                  <span>
                    <p className="text-base font-semibold dark:text-primary text-black mb-2">
                      Job Description:
                    </p>
                    <ul className="list-disc list-inside dark:text-primary text-black space-y-3">
                      {item.jobDescription.map((item, index) => (
                        <li key={index} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </span>
                </div>
              </CardHeader>
              <CardFooter className="text-sm">
                {item.workingFrom} {item.workingTill && `- ${item.workingTill}`}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
