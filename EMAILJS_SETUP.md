# EmailJS Setup Instructions

## Overview
The gold calculator popup uses EmailJS to send quote requests to `omvgoldchandanagar@gmail.com`. The configuration is now managed through environment variables.

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** Gold Quote Request from {{from_name}}

**Content:**
```
Hello {{to_name}},

You have received a new gold quote request:

Customer Details:
- Name: {{name}}
- Phone: {{phone}}

Gold Details:
- Location: {{location}}
- Karatage: {{karatage}}
- Weight: {{weight}} grams

Message:
{{message}}

Please contact the customer as soon as possible.

Best regards,
{{from_name}}
```

4. Save the template and note down the **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxxx`)

## Step 5: Configuration (Already Set Up)
The EmailJS configuration is already set up using environment variables in the `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=service_gyoc3th
VITE_EMAILJS_TEMPLATE_ID=template_wh9dd0u
VITE_EMAILJS_PUBLIC_KEY=zLIsir0Or8OOmqajo
VITE_EMAILJS_TO_EMAIL=omvgoldchandanagar@gmail.com
```

The configuration is automatically loaded from these environment variables.

## Step 6: Test the Integration
1. Start your development server: `npm run dev`
2. Navigate to the calculator section
3. Fill out the form and click "Calculate Now"
4. Fill in your details in the popup and click "Get Quote"
5. Check your email for the quote request

## Troubleshooting
- Make sure all IDs and keys are correct
- Check that your email service is properly connected
- Verify that the template variables match the ones in the code
- Check the browser console for any error messages

## Security Note
- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production deployment
