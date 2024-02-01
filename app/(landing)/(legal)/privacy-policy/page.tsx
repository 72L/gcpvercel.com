'use client';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import { markdownComponents } from '@components/markdown/components';

const privacyPolicy = `

# Privacy Policy

We recognize the importance of privacy, security, and transparency. This Privacy Policy outlines the way in which we collect, use, maintain, and disclose information collected from users of our services. We are committed to protecting the privacy of our users and maintaining the security of any personal information collected through our platform.

1. Information Collection and Use. We collect and use personal information to provide our services and to improve our platform. The types of personal information that we collect may include but are not limited to (a) contact information (e.g., name, email address, phone number), (b) log files and metadata (e.g., IP address, browser type, date and time of access), (c) usage information (e.g., pages visited, features used, time spent on the platform). We may use this information to (a) provide and improve our services, (b) communicate with our users, (c) analyze usage trends and monitor the effectiveness of our platform. (d) enforce our terms of service, (e) comply with legal and regulatory requirements.

2. Cookies. We use cookies and similar tracking technologies to improve the user experience and personalize content and advertising. Cookies are small data files that are placed on a user's device when they visit our website or use our services. Cookies enable us to collect information such as IP addresses, browser types, and browsing behavior. We use this information to analyze trends, administer our platform, track user movements around the site, and gather demographic information about our user base. Users can control the use of cookies by changing their browser settings. Most browsers allow users to refuse or delete cookies. However, if users choose to disable cookies, some parts of our website or services may not function properly.

3. Information Sharing. We do not sell or rent personal information to third parties. We may share personal information with third-party service providers who help us provide our services, including but not limited to hosting, analytics, and customer support. We require these third-party service providers to maintain the confidentiality and security of any personal information they receive from us. We may also share personal information in response to a subpoena, court order, or other legal process.

4. Security. We take the security of personal information seriously and implement appropriate technical and organizational measures to protect against unauthorized access, disclosure, alteration, or destruction of personal information. We regularly review and update our security practices to ensure that we are meeting industry standards.

5. Third-party links. Our website or services may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices of these third-party sites or services. We encourage users to review the privacy policies of these third-party sites before providing any personal information.

6. International transfers. If you are located outside the United States and choose to provide personal information to us, please note that we may transfer that information to the United States or other countries that may not have data protection laws equivalent to those in your country of residence. By providing personal information, you consent to the transfer of information to the United States or other countries. We comply with applicable data protection laws regarding international transfers of personal data. We use standard contractual clauses approved by the European Commission or other appropriate safeguards to protect the personal information that we transfer.

7. Data Retention. We retain personal information for as long as necessary to provide our services and for other essential purposes, such as complying with legal obligations, resolving disputes, and enforcing our agreements.

8. Your Rights. You have the right to access, correct, and delete your personal information. You may also have the right to object to or restrict the processing of your personal information. To exercise these rights, please contact us using the contact information provided below.

9. Children's privacy. Our website or services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete the information as soon as possible. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us at privacy@gcpvercel.com.

10. California Consumer Privacy Act (CCPA). If you are a California resident, you have the right to know what personal information we collect, use, and disclose about you. You also have the right to request that we delete your personal information. To exercise your rights, please contact us at [privacy@gcpvercel.com](mailto:privacy@gcpvercel.com). We do not discriminate against California residents who exercise their CCPA rights. However, we may offer financial incentives or different pricing based on participation in loyalty programs or other similar programs.

11. Changes to this Privacy Policy. We may update this Privacy Policy from time to time to reflect changes in our business or legal requirements. We will notify users of any material changes to this Privacy Policy by posting a notice on our website or by sending an email to the email address associated with their account.

12. Contact Us. If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at privacy@gcpvercel.com.


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
