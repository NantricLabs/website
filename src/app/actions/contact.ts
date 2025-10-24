"use server"

export async function submitContactForm(formData: FormData) {
	const name = formData.get("name") as string
	const email = formData.get("email") as string
	const company = formData.get("company") as string
	const phone = formData.get("phone") as string
	const message = formData.get("message") as string

	// Validate required fields
	if (!name || !email || !message) {
		return {
			success: false,
			error: "Please fill in all required fields.",
		}
	}

	// Validate email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (!emailRegex.test(email)) {
		return {
			success: false,
			error: "Please enter a valid email address.",
		}
	}

	// Create Discord embed message
	const discordPayload = {
		embeds: [
			{
				title: "📬 New Contact Form Submission",
				color: 0x14b8a6, // Teal color
				fields: [
					{
						name: "👤 Name",
						value: name,
						inline: true,
					},
					{
						name: "📧 Email",
						value: email,
						inline: true,
					},
					...(company
						? [
								{
									name: "🏢 Company",
									value: company,
									inline: true,
								},
							]
						: []),
					...(phone
						? [
								{
									name: "📱 Phone",
									value: phone,
									inline: true,
								},
							]
						: []),
					{
						name: "💬 Message",
						value: message,
						inline: false,
					},
				],
				timestamp: new Date().toISOString(),
				footer: {
					text: "Nantric Contact Form",
				},
			},
		],
	}

	try {
		const response = await fetch(
			"https://discord.com/api/webhooks/1431086771273338921/A7pn5z00ekGvUJ3Phde6EwNBM6Dn3LghkqfAuY4Bd88qYOUGZDwwgbOr4o39kPh13weI",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(discordPayload),
			},
		)

		if (!response.ok) {
			throw new Error("Failed to send message to Discord")
		}

		return {
			success: true,
			message: "Thank you for your message! We will get back to you soon.",
		}
	} catch (error) {
		console.error("Error sending to Discord:", error)
		return {
			success: false,
			error: "Failed to send message. Please try again later.",
		}
	}
}
