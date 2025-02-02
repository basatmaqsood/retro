"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const router = useRouter();

    useEffect(() => {
        if (router) {
            router.replace("/");
        }
    }, [router]);

    return null; // No need to render anything
}
