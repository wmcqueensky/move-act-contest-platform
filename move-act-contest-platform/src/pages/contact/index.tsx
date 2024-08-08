import supabase from "../../config/supabase-client.ts";
import { useState, useEffect } from "react";

const Contact = () => {
	const [connectionStatus, setConnectionStatus] = useState<string | null>(null);

	useEffect(() => {
		const checkConnection = async () => {
			const { data, error } = await supabase.from("works").select("*");

			if (error) {
				setConnectionStatus("Failed to connect to Supabase: " + error.message);
			} else {
				setConnectionStatus("Successfully connected to Supabase");
			}
		};

		checkConnection();
	}, []);

	return (
		<div>
			<h1>Contact Page</h1>
			<p>{connectionStatus}</p>
		</div>
	);
};

export default Contact;
