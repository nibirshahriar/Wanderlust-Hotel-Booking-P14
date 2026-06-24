"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { MdDelete } from "react-icons/md";

export function DeleteDialog({ destination }) {
  const { _id, destinationName } = destination;

  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();

    const response = await fetch(`http://localhost:5000/destinations/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
    });
    const result = await response.json();
    redirect("/destinations");
  };

  return (
    <AlertDialog>
      <Button
        variant=""
        className="rounded border border-red-300 px-4 py-2 text-sm text-red-500"
      >
        <MdDelete /> Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete{" "}
                <strong>{destination.destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Destination
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
