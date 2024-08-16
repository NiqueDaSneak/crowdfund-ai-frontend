import { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  const { code } = JSON.parse(event.body || '{}');

  // Example logic: Validate the invite code
  const validCodes = ['demo123', 'invite456']; // Replace with your actual validation logic

  if (validCodes.includes(code)) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Invite code is valid!' }),
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: 'Invalid invite code.' }),
    };
  }
};
