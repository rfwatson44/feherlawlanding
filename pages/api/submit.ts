import type { NextApiRequest, NextApiResponse } from 'next';

const LD_URL   = 'https://feherlawfirm.leaddocket.com/opportunities/form/19';
const ZAP_HOOK = 'https://hooks.zapier.com/hooks/catch/12606191/uod33ls/';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
  const data = req.body;

  // 1) Forward to Lead Docket
  const ldParams = new URLSearchParams({
    First: data.firstName,
    Last: data.lastName,
    Email: data.email,
    Phone: data.phone,
    Were_you_wrongfully_terminated_from_your_job: data.terminated,
    Do_you_feel_like_you_are_being_discriminated_against: data.discriminated,
    Name_of_Employer: data.employer,
    How_many_years_did_you_work_there: data.yearsWorked,
    What_is_your_occupation: data.occupation,
    In_what_State_were_you_employed: data.state,
    'Date_of_Incident/Termination': data.terminationDate,
    Are_you_working_with_another_attorney: data.hasAttorney,
    Please_briefly_explain_your_situation: data.situation,
  });
  await fetch(LD_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: ldParams.toString(),
  });

  // 2) Forward to Zapier
  await fetch(ZAP_HOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return res.status(200).json({ success: true });
}
