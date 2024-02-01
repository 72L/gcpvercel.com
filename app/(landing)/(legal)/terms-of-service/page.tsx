'use client';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import { markdownComponents } from '@components/markdown/components';

const privacyPolicy = `

# Terms of Service

Welcome to Integration Services, a Vercel integrations developer operated by Ephemeral.ai Ltd registered in England, UK under company number 11545663. By using our service, you agree to these terms of service ("TOS"):

1. Description of Service: "Service" refers to the Google Cloud Platform on Vercel service provided by Integration Services to its customers and users. The Service may also include technical support, updates, and any other features or functionality related to hosting.

2. "Site" refers any web pages operated by Integration Services, including but not limited to web pages with URLs that are hosted at gcpvercel.com.

3. "Customer" or "Customers" refer to all users of the Integration Services Service, regardless of whether they have paid for the Service. All users are subject to these terms of service, and by using the Service, users acknowledge that they have read, understood, and agree to be bound by these terms.

4. Acceptance: By accepting this TOS or by accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by this TOS. If you are entering into this TOS on behalf of a company, business or other legal entity, you represent that you have the authority to bind such entity and its affiliates to this TOS, in which case the terms “you” or “your” shall refer to such entity and its affiliates. If you do not have such authority, or if you do not agree with this TOS, you must not accept this TOS and may not use the Service.

5. Service Availability and Use: We will make reasonable efforts to ensure that the Integration Services Service is available at all times. However, we make no guarantees as to the availability or uptime of our Service, and we reserve the right to modify, suspend, or terminate the Service at any time for any reason without notice.

6. Limitation of Liability: To the extent permitted by applicable law, Integration Services shall not be liable to you or any third party for any direct, indirect, incidental, special, punitive, or consequential damages arising out of or in connection with the use of our Service. Integration Services shall not be liable for any damages arising out of or in connection with events outside of its control, including acts of God, natural disasters, or government actions. In any event, our liability to you or any third party shall be limited to the amount paid by you for the service during the preceding 60-day period.

7. No Warranties: We provide the Integration Services Service on an "as is" and "as available" basis without any warranty of any kind, whether express, implied, or statutory. To the extent permitted by applicable law, we disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.

8. Jurisdictional Limitations: Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the above limitations and disclaimers may not apply to you. In such cases, our liability will be limited to the greatest extent permitted by law.

9. Indemnification: You agree to indemnify, defend, and hold Integration Services and its affiliates, officers, directors, employees, agents, and licensors harmless from any claim, demand, or damage, including reasonable attorneys' fees, arising out of your use of the Integration Services Service, your violation of these terms of Service, or your violation of any rights of a third party.

10. Termination: You may terminate your use of our Service at any time for any reason, but you will not be entitled to any refunds. Integration Services may also terminate your access to the Service at any time for any reason without notice. Upon termination, you must cease all use of the Service and delete any Integration Services data in your possession.

11. Privacy Policy: Integration Services takes the privacy and security of its customers' personal information seriously. To learn more about how we collect, use, and protect your personal information, please refer to our Privacy Policy, which is available on our website.

12. Intellectual Property Rights: All intellectual property rights related to the Integration Services service, including its software and tools, are owned by Integration Services and/or its licensors. Customers may not use, reproduce, or distribute any Integration Services intellectual property without prior written consent from Integration Services.

13. Responsibility for Your Content: You are solely responsible for all data, code, information, feedback, suggestions, text, content, and other materials that you deliver, provide, or otherwise transmit or store in connection with or relating to the Integration Services Service ("Your Content"), including the code, data, and logs processed by the Service. You acknowledge and agree that Integration Services has no control over Your Content, and Integration Services does not monitor, review, or endorse any of Your Content. You further acknowledge and agree that Integration Services may access, preserve, and disclose Your Content and any other content and information if required to do so by law or in a good faith belief that such access, preservation, or disclosure is reasonably necessary to (a) comply with legal process; (b) enforce these TOS; (c) respond to claims that any content or logs violate the rights of third parties; (d) respond to your requests for customer service; or (e) protect the rights, property, or personal safety of Integration Services, its users, or the public.

14. Security and Responsibility for Your Content: You understand that the operation of the Integration Services Service, including any content or data you upload to or transmit through the Service, may be unencrypted and involve (a) transmissions over various networks; (b) changes to conform and adapt to technical requirements of connecting networks or devices; and (c) transmission to Integration Services's third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to operate and maintain the Service. Accordingly, you acknowledge that you bear sole responsibility for adequate security, protection, and backup of Your Content. Integration Services will have no liability to you for any unauthorized access or use of any of Your Content, or any corruption, deletion, destruction, or loss of any of Your Content.

15. Usage Restrictions. Customer will not (a) use the Service to store or transmit infringing, libelous, or otherwise unlawful or tortious material, or to store or transmit material in violation of third-party privacy rights, (b) use the Service to store, transmit, or run code, files, scripts, agents or programs intended to do harm, including, for example, viruses, worms, time bombs and Trojan horses, (c) interfere with or disrupt the integrity or performance of the Service or third-party data contained therein, (d) attempt to gain unauthorized access to the Service or its related systems or networks, (e) permit direct or indirect access to or use of Service in a way that circumvents a contractual usage limit, (f) modify, copy, or create derivative works of the Service or any part, feature, function or user interface thereof, (g) frame or mirror any part of any Service or Content, other than framing on Customer's own intranets or otherwise for its own internal business purposes, (h) except to the extent permitted by applicable law, disassemble, reverse engineer, or decompile a Service or Content or access it to (1) build a competitive product or service, (2) build a product or service using similar ideas, features, functions or graphics of the Service, (3) copy any ideas, features, functions or graphics of the Service, or (4) determine whether the Services are within the scope of any patent.

16. Account Security: You are responsible for maintaining the confidentiality of your login, password, and account and for all activities that occur under your login or account. Integration Services reserves the right to access your account in order to respond to your requests for technical support and to investigate suspicious activity.

17. Use of Your Name for Marketing: Integration Services reserves the right to use your name and/or your business name as a reference for marketing or promotional purposes on Integration Services's website and in other communication with existing or potential Integration Services customers. To decline Integration Services this right, you must email info@gcpvercel.com stating that you do not wish to be used as a reference.

18. General Practices and Limits: You acknowledge that Integration Services may establish general practices and limits concerning use of the Service, including without limitation the maximum period of time that data or other content will be retained by the Service and the maximum storage space that will be allotted on Integration Services's servers on your behalf. You agree that Integration Services has no responsibility or liability for the deletion or failure to store any data or other content maintained or transmitted to the Service. You acknowledge that Integration Services reserves the right to terminate accounts that are inactive for any period of time. You further acknowledge that Integration Services reserves the right to change these general practices and limits at any time, in its sole discretion, with or without notice.

19. Payment and Billing: If you subscribe to a paid plan, you hereby authorize Integration Services to bill your payment instrument in advance on a periodic basis in accordance with the payment plan you have selected, and you further agree to pay any charges so incurred. If you dispute any charges, you must let Integration Services know within thirty (30) days after the date that Integration Services invoices you. Integration Services reserves the right to change its prices. If Integration Services does change prices, Integration Services will provide notice of the change on the Site or in an email to you, at Integration Services's discretion, at least 30 days before the change is to take effect. Your continued use of the Service after the price change becomes effective constitutes your agreement to pay the changed amount. Integration Services may choose to bill through an invoice, in which case, full payment for invoices issued in any given month must be received by Integration Services thirty (30) days after the mailing date of the invoice, or the Service may be terminated. Unpaid invoices are subject to a finance charge of up to 5% per month on any outstanding balance, or the maximum permitted by law, whichever is lower, plus all expenses of collection. You shall be responsible for all taxes associated with Services other than U.S. and U.K. taxes based on Integration Services's net income.

20. Feedback and Communication: Any feedback, suggestions, ideas, or other communications you provide to Integration Services in connection with the Service (collectively, "Feedback") shall be deemed to be non-confidential and Integration Services shall be free to use such Feedback on an unrestricted basis without any obligation to compensate you or anyone else for such use.

21. Severability: Each part or term of these Terms of Service is treated as separate. It’ll still be valid even if other parts or terms of the Terms of Service are found to be invalid or unreasonable. If any provision of this agreement is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.

22. Third-Party Rights: No one, except for you and us, has rights under the Terms of Service or the right to enforce any of its terms. No others can use the Contracts (Rights of Third Parties) Act 1999 to acquire such rights.

23. No Waiver: Any failure by Integration Services to enforce any provision of this agreement shall not constitute a waiver of that provision or any other provision.

24. Entire Agreement: This agreement contains the entire understanding between Integration Services and its customers and users, and supersedes any prior agreements or understandings, whether written or oral.

25. Invalidity: If a court, arbitrator or any government agency tells us that any part of the Terms of Service isn’t valid, the remaining parts of the Terms of Service will continue to apply.

26. Electronic Communications: Visiting our site or sending emails to us constitutes electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures and other communications that we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communications be in writing.

27. Third-Party Links and Resources: The Integration Services Service may provide, or third parties may provide, links or other access to other sites and resources on the Internet. Integration Services has no control over such sites and resources and Integration Services is not responsible for anything contained therein or any result from use thereof. You further acknowledge and agree that Integration Services will not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any content, events, goods, or services available on or through any such site or resource. Any dealings you have with third parties found while using the Integration Services Service are between you and the third party, and you agree that Integration Services is not liable for any loss or claim that you may have against any such third party.

28. Changes to Terms: Integration Services reserves the right to modify or update these TOS at any time without prior notice. Your continued use of the Service after any such modifications or updates shall constitute your acceptance of the revised terms of service. We encourage you to periodically review these terms of service to stay informed about any changes. If you do not agree to any revised terms, your only recourse is to discontinue using the service.

29. Governing Law: This TOS shall be governed by the laws of the State of New York in USA without regard to the principles of conflicts of law. Unless otherwise elected by Integration Services in a particular instance, you hereby expressly agree to submit to the exclusive personal jurisdiction of the federal and state courts of the State of New York for the purpose of resolving any dispute relating to your access to or use of the Service.

`;

export default function PrivacyPolicy() {
  return (
    <div
      className="flex shrink-0 flex-col items-center gap-6 bg-white pb-[25vh] pt-12"
      id="pricing"
    >
      <div className="flex w-full max-w-[1200px] flex-col items-center px-4">
        <ReactMarkdown components={markdownComponents}>
          {privacyPolicy}
        </ReactMarkdown>
      </div>
    </div>
  );
}
