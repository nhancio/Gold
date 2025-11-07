# EmailJS Setup Instructions

## Overview
The gold calculator popup uses EmailJS to send quote requests to `omvgoldchandanagar@gmail.com`. The configuration is now managed through environment variables.

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

### For Gmail Service:

1. **Create Google Cloud Console Project:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the **Gmail API** for your project

2. **Configure OAuth Consent Screen:**
   - Go to "APIs & Services" > "OAuth consent screen"
   - Choose "External" user type (unless you have a Google Workspace)
   - Fill in the required information:
     - App name: "OMV Gold Buyers Email Service"
     - User support email: Your email
     - Developer contact: Your email
   - Add scopes: `https://www.googleapis.com/auth/gmail.send`
   - Save and continue

3. **Create OAuth 2.0 Credentials:**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Choose "Web application" as the application type
   - Name: "EmailJS Gmail Service"
   - Authorized redirect URIs: Add `https://api.emailjs.com/api/v1.0/user/oauth/authorize`
   - Click "Create"
   - **Copy the Client ID** (NOT the Client Secret - you don't need it for EmailJS)

4. **Configure EmailJS Service:**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose "Gmail"
   - Click "Connect Account"
   - When prompted, paste your **Google OAuth Client ID**
   - Complete the OAuth flow by signing in with your Gmail account
   - Authorize the permissions
   - Note down the **Service ID** (e.g., `service_xxxxxxx`)

### For Other Email Providers:
- Follow the provider-specific setup instructions in EmailJS
- Note down the **Service ID** after configuration

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
