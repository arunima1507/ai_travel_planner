import { NextResponse } from "next/server";
import { exec } from "child_process";

export async function POST(req: Request) {

  const body = await req.json();

  return new Promise((resolve) => {

    const input = JSON.stringify(body);

    exec(
      `python ml/itinerary_generator.py '${input}'`,
      (error, stdout, stderr) => {

        if (error) {

          resolve(
            NextResponse.json({
              error: stderr,
            })
          );

          return;
        }

        resolve(
          NextResponse.json({
            itinerary: JSON.parse(stdout),
          })
        );
      }
    );
  });
}