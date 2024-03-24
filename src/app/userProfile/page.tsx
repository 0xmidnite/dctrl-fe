// import getGoogleCalendarEvents from "@/components/google/googleCalendarApi";
"use client";
import { UserParentComponent } from "@/components/user/userParentComponent";
import { UserFormContext } from "@/types";

export default function UserProfile() {
  // This page uses the UserParentComponent to be able to handle all of the user information and keep it consistent throughout all the related pages.

  return (
    <main>
      <UserParentComponent />
    </main>
  );
}
