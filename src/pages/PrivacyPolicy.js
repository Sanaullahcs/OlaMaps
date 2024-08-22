import React from "react";
import "../styles/privacy.css"; // Assuming this is the correct CSS file for privacy policy styles
import Nav from "../components/Layout/Nav";
import CommonFooter from "../components/Layout/CommonFooter";
import { Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Privacy Policy
        </title>
      </Helmet>
      <Nav />
      <div>
        <div className="privacy-policy-container">
          <Box mt={5} mb={5}>
            <Typography variant="h2" className="privacy-policy-title" gutterBottom>
              Privacy Policy
            </Typography>

            {/* Introduction Section */}
            <Typography variant="h5" className="privacy-policy-subtitle" gutterBottom>
              Introduction
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              Thanks for choosing <strong>Fribe</strong>! Our mission is to make communicating with a business as easy as talking to a friend, and that starts right here. Please review these General Terms and Conditions (referred to as these <strong>“Terms”</strong>) carefully, as they form a part of the legal agreement between you and us in regards to the Services we offer.
              In these Terms, we refer collectively to these Terms, the Data Processing Agreement, the Documentation, the Product Specific Terms, any applicable Service Level Agreement (<strong>“SLA”</strong>) and applicable Order Form(s) (as defined below) as the <strong>“Agreement.”</strong> The Agreement sets out the full terms of the legal agreement between you and us in relation to the Services we offer. All references in this Agreement (and any documents included or referenced in it) to any documents or links shall refer to such documents or links as may be amended or updated from time to time.
            </Typography>
           
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              The terms <strong>“you,” “your,”</strong> or <strong>“Customer”</strong> refer to you, and the terms <strong>“we,” “us,” “our,”</strong> or <strong>Fribe”</strong> refer to the Fribe contracting entity listed in Section 15 (Contracting Entity), unless otherwise stated on your Order Form. You or MessageBird may also be referred to individually as a <strong>“Party”</strong> and together as <strong>“Parties”</strong> in these Terms.
              An <strong>“Affiliate”</strong> means any entity that directly or indirectly controls, or is controlled by, or is under common control with the Party specified. For purposes of this definition, <strong>“control”</strong> means direct or indirect ownership of more than fifty percent (50%) of the voting interests of the subject entity or the power to direct the management and policies of the subject entity.
            </Typography>
         
            {/* Your Account Section */}
            <Typography variant="h5" className="privacy-policy-subtitle" gutterBottom>
              1. Your Account
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>1.1 Account Creation.</strong> You will be asked to create an account in order to use the Services. In order to create an account to use the Services, you must (a) be legally able to represent the company or business contracting our Services; and (b) review and accept this Agreement on its behalf. To create an account, you will be asked to provide registration information including your email address and/or phone number and create a password. You agree to (a) provide true, current, and complete information when creating an account; and (b) keep that information true, current, and complete during your use of the Services. For information about how we treat your personal information, please see Section 5.3 (Your Data) of this Agreement.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>1.2 Affiliate Accounts.</strong> If any of your Affiliates want to use the Services, (a) each Affiliate must accept these Terms individually and create their own account, which may require a separate Order Form; or (b) you may allow your Affiliates to use the Services without entering into a separate Order Form by providing such Affiliate(s) a login ID, password, and/or API key to access and use the Services. If you provide Affiliate(s) with access to your account, this Agreement applies to each Affiliate, and you are directly and primarily responsible for all access to and use of the Services by your Affiliates. In such case, references in these Terms to “you” includes a reference to your relevant Affiliates and any users of your account, login ID, password, and/or API key from time to time.
            </Typography>

            {/* Our Services Section */}
            <Typography variant="h5" className="privacy-policy-subtitle" gutterBottom>
              2. Our Services
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>2.1 Services.</strong> The “Services” means all products and services provided by us or our Affiliates that are (a) ordered by you under any applicable ordering document (including applicable technical documentation made available to you through a Site) between the Parties or pursuant to a Reseller Sales Agreement (as defined below) that specifies pricing and other commercial terms (“Order Form”); or (b) used by you. The Services are designed and intended for commercial use only and are not intended for personal or private individual or consumer use. As our Services are business oriented, you should understand that our Services do not provide access to emergency services or emergency service providers including the police, fire departments, or hospitals, or otherwise connect to public safety answering points. You should ensure that you have separate access to those services using your regular communication channels such as phone or mobile.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>2.2 Our Affiliates.</strong> 
              Our Affiliates may provide the Services, or a portion thereof (including ancillary services, such as billing), to you in accordance with these Terms and any applicable Order Form(s). We will (a) be responsible for the Services our Affiliates provide and (b) not be relieved of our obligations under these Terms if our Affiliates provide the Services or a portion thereof. Where this Agreement refers to obligations you owe to us and obligations we owe to you, we may exercise our rights and entitlements and discharge our obligations through our Affiliates.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>2.3 Changes to the Services.</strong> 
              From time to time, we may change the features and functions of the Services. If we make material changes, we will use reasonable efforts to notify you of such changes, such as posting an announcement on our website or sending you an in-application notice or email. We agree such changes to the Service will not materially diminish the overall features or functionality of the Services. Your continued use of the Services following the posting or notice of the changes will constitute your acceptance of such changes. If you do not agree to such changes, you must stop using the Services immediately. If applicable law requires us to give you specific notice of any such change, we will notify you in accordance with Section 12 (Changes to These Terms). While we endeavor to keep our Site informative and up to date, you acknowledge and agree that not all features and functions described on the promotional or descriptive sections of the Site from time to time may be available to you and your use of our Services will be as made available in-application in accordance with Section 2.1 once you become a Customer. 
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>2.4 Account Suspension.</strong> 
              While we have no obligation to screen or monitor any content or communications, we may suspend your account(s) immediately if we reasonably determine: (a) that you or any users of your Customer Application (as defined below) have materially breached any part of this Agreement, including our Product Specific Terms and any limitations included in an Order Form or on a Site; (b) that our provision or your or another user’s use of the Services is or becomes prohibited by applicable law or regulation or the terms of any third-party providers; (c) there is any use of the Services by you or any users of your Customer Application that in our judgment threatens the security, integrity, or availability of the Services or constitutes fraudulent or illegal activity; or (d) that your account information is untrue or incomplete. If we suspend your account due to your actions or omissions pursuant to this Section 2.4 or Section 4 (Fees and Payment Terms), to the greatest extent permitted by applicable law, we will have no liability for any damages, liabilities, losses (including any loss of data or profits), or any other consequences that you may incur as a result. You will remain responsible for the Fees (as defined below) during any suspension. 
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>2.5 Maintenance and Downtime.</strong> 
              Our Services may become temporarily unavailable: (a) to perform scheduled or unscheduled maintenance, modifications, or upgrades; (b) due to hardware failures, power outages, or failures of third-party providers; (c) to mitigate or prevent the effects of any threat or attack to the Services or any other network or systems on which the Services rely; or (d) as required for legal or regulatory reasons. We will make a reasonable effort to notify you in advance of any scheduled Services’ unavailability. Except as provided for in an Order Form, on a Site, or SLA, to the greatest extent permitted by applicable law, we will have no liability for any damages, losses (including any loss of data or profits), or any other consequences that you may incur as a result of unavailability of Services or the failure to provide notice of unavailability. 
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>2.6 Beta Products.</strong> 
              You may be permitted to use our Services free of charge, or we may invite you to test products or features of our Services that are not generally available to all of our customers or to the public (collectively, “Beta Products”). We are not obligated to provide Beta Products to any customer or to our general customer base and may choose to discontinue a Beta Product at any time.
            </Typography>

            {/* Responsibilities Section */}
            <Typography variant="h5" className="privacy-policy-subtitle" gutterBottom>
              3. Responsibilities
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>3.1 Our Responsibilities.</strong> 
              We will (a) make the Services available to you in accordance with (i) the Agreement, including any applicable Order Form(s), and (ii) any publicly available technical documentation for such Services made available to you through Fribe’s or an Affiliate’s web domain <strong>(“Site”)</strong>, which may be updated from time to time <strong>(“Documentation”)</strong>; (b) maintain a written and comprehensive information security program <strong>(“Security Overview”)</strong>, and (c) provide the Services in accordance with all laws applicable to us in our provision of the Services to customers generally (i.e. without regard to your particular use of the Services). We reserve the right to select the technical methods necessary to ensure and/or optimize delivery of the Services in accordance with this Agreement.
            </Typography>

            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>3.2 Your Responsibilities.</strong> 
              You agree to use the Services only in accordance with how the Services have been made available to you by us, this Agreement (including any applicable Documentation and Product Specific Terms), Order Form(s), documentation on the Site, and applicable law. You will be solely responsible for (a) all use of the Services under your account, including prohibited acts such as reverse engineering, copying, disassembling, decompiling, or modifying, copying or creating derivative works of any part of the Services (or any of them); (b) all acts, omissions, and activities of anyone who accesses or otherwise uses your account or any Customer Application (defined below), including your end users, and their compliance with this Agreement; (c) any data and other information or content submitted by you or for you (or by a user of your Customer Application) under the Agreement and processed or stored by the Services <strong>(“Customer Data”)</strong>; and (d) all applications, web domains, devices, and communication channels owned or controlled by Customer or by third parties, or made available to Customer or its actual users which access, use, interact with, integrate or depend on the Services (each, a “<strong>Customer Application</strong>”).
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              You will not transfer, resell, lease, license, or otherwise make the Services available to third parties (except as specifically permitted under the Agreement to allow users to access the Services via a Customer Application). You agree to provide prompt and reasonable cooperation regarding information requests we receive from law enforcement, regulators, or telecommunications providers.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              We will apply appropriate security measures in accordance with our Security Overview and may suspend your account if we believe it has been compromised. However, we do not police for and cannot guarantee we will learn of or prevent any inappropriate access to your account and use of our Services. You are solely responsible for preventing unauthorized access to or use of the Services through your account and will notify us promptly of any such unauthorized access or use. Except to the extent caused by our failure to implement or comply with the Security Overview, we are not responsible for unauthorized access to or use of your account or the Services and you will continue to be charged in respect of any such access.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              You will not use our Services or permit them to be used to transmit inappropriate content, such as content that (i) is unsolicited; (ii) violates any legal, regulatory, self-regulatory, governmental, statutory, or telecommunication network operator’s requirements or codes of practice; (iii) is pornographic, abusive, racist, obscene, offensive, threatening, harassing, defamatory, discriminatory, misleading or inaccurate; (iv) is harmful, including but not limited to hate speech; or (v) encourages violence, discrimination or illegal, unethical or immoral actions. We may remove any inappropriate content from the Services and/or suspend your access to the Services without prior notice where we become aware of such inappropriate usage.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              We are not liable for any damages, liabilities, losses (including any loss of data or profits), or any other consequences you may incur as a result of any suspension or removal of content by us in accordance with this Section 3.2.
            </Typography>

            {/* Fees and Payment Terms Section */}
            <Typography variant="h5" className="privacy-policy-subtitle" gutterBottom>
              4. Fees and Payment Terms
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>4.1 Price Quotations.</strong> Unless explicitly specified otherwise in the price quotation or by Fribe in writing, all price quotations are non-binding and may be adjusted at any time, particularly if other or additional information is provided.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
            <div>
      <p>
        <strong>4.2 Fees and Billing Information.</strong> You agree to pay all fees in accordance with the then current applicable rates, which may be updated from time to time and available at 
        <Link 
  to="/pricing" 
  style={{ 
    color: '#7f1fdf', 
    textDecoration: 'none', 
    marginLeft: '10px',  // Add left margin
    marginRight: '10px'  // Add right margin
  }}
>
  https://www.fribe.io/pricing
</Link>

         (or as otherwise specified for the other Services of our Affiliates), unless otherwise specified in the applicable Order Form(s), documentation on the Site, or an invoice (“Services Fee”). 
        Where we list or agree the Services Fees in an Order Form with you, we reserve the right to update fees from time to time for Services which comprise transactional services (including in respect of the SMS Service, Voice Service and WhatsApp Service) under the Order Form. 
        In the event of any Services Fee updates, we will take commercially reasonable steps to notify you of such changes taking effect which may be satisfied by notifying you via an in-application notice on the Site or otherwise. 
        You will provide complete and accurate billing and contact information and notify us of any changes to such information. 
        Your use of the Services may be subject to certain usage limitations listed in the Order Form or in documentation on the Site (“Limitations”). 
        If your use of the Services exceeds those Limitations, you will pay the applicable Overage Fee listed for such Services in the Order Form or as described on a Site. 
        Overage Fees will be considered part of the Services Fee and will be deducted from any Prepaid Balance or invoiced or charged to the credit card or other payment information on file, as applicable, based on the Overage Billing Frequency stated in the Order Form or as listed in your portal on the Site. 
        If the Overage Billing Frequency is not listed in the Order Form or in your portal on the Site, the Overage Fees will be billed and due in accordance with Section 4 (Fees and Payment Terms) of these Terms.
      </p>
    </div>            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>4.3 Add-ons.</strong> Some features and services are offered as add-ons to the Services. If you add on a feature or service that has an additional fee, this may be deducted from your Prepaid Balance or you will be billed that additional amount, with each billing cycle for as long as the add-on is active.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>4.4 Taxes.</strong> All Services Fees are exclusive of any (a) applicable taxes, levies, duties, or other similar exactions imposed by a legal, governmental, or regulatory authority in any applicable jurisdiction, including sales, use, value-added, consumption, communications, digital services tax or withholding taxes; and (b) other indirect taxes, including any related interest and/or penalties and other government duties, as well as any other costs including transaction costs or bank transfer fees (collectively, “<strong>"Taxes"</strong>”). Taxes, other than withholding taxes, will be shown as a separate line item on an invoice. You are responsible for all Taxes associated with the Services and these Terms, excluding any taxes based on our net income (being corporate income tax), property, or employees. We may deduct applicable Taxes from any Prepaid Balance. If you are exempt from any Taxes, prior to each order you are responsible for providing us with a valid tax exemption certificate or a value added tax identification number (“<strong>Tax Exemption</strong>”). If Taxes should be accounted for under a reverse charge mechanism or similar procedure, it is your responsibility prior to each order to provide us with a valid registration number. If for any reason the appropriate taxing authorities determine that you are not exempt from any Taxes and we pay such Taxes, we will invoice you or may deduct the said amounts from your Prepaid Balance, including any applicable interest or penalties imposed by the appropriate taxing authorities. You may withhold or directly pay Taxes with your purchase of the Services if required to do so by applicable law, but we will not be responsible for the determination of, or the application of such Taxes. In circumstances where you withhold Taxes, you undertake to provide us with necessary documentation to evidence such withholding is required and has been done in accordance with applicable law. If and to the extent a withholding of Taxes is required by law, the Services Fees will be increased with such additional amounts as will ensure that the net amount we receive equals the full amount as would have been received by us had the withholding not been required.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>4.5 Surcharges.</strong> All Services Fees are exclusive of any applicable government, regulatory, or communications service (for example, over the top communications providers or telecommunication provider (e.g., carrier)) fees or surcharges (collectively, “<strong>Communications Surcharges</strong>”). You will pay all Communications Surcharges associated with your use of the Services. When required by applicable law or otherwise at our election, Communications Surcharges will be shown as a separate line item on an invoice. Communications Surcharges may change at any time.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>4.6 Currency.</strong> All Fees shall be paid in the currency specified in the applicable Order Form or otherwise as listed on the Site. If no currency is specified, Fees are in Euros. If any Fees are paid in a currency other than Euros, the amount of such payment shall be calculated according to the official exchange rate as listed by a recognized conversion service selected from time to time by us on the day when payment is made. We reserve the right to convert the currency of any third party fees applicable to our services (including any Communications Surcharges or third party service provider fees) in any Order Form or invoice and to update such currency conversion from time to time and, where applicable, will do using a recognized conversion service selected by us at the relevant time.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>4.7 Prepaid Balance.</strong> Unless otherwise specified in the Order Form or on the Site, any prepaid balance, deposit, wallet funds or other credits (including any lodgement, deposit or top-up of funds using a prepay wallet or credit feature on our Site) (“<strong>Prepaid Balance</strong>”) you purchase or make will lapse if you do not use the Prepaid Balance within one year after the purchase date of the Prepaid Balance (or relevant part of it). Subject to Section 11.5 (Refund or Payment upon Termination), we are not obliged to refund any Prepaid Balance, including in circumstances where we suspend or deactivate your account because of non-compliance with this Agreement. The Prepaid Balance will be used and depleted for any Services used by your account. Unless otherwise specified in the Order Form or on the Site, we may require you to have a Prepaid Balance or a minimum Prepaid Balance in order to use our Services. We may refuse to provide Services where you have an insufficient Prepaid Balance. When you elect or are required through the Site or an Order Form, your Prepaid Balance may be subject to automatic top-up via a valid credit card, direct debit, standing order or other analogous automatic payment method. You authorize us to implement any such automatic top-up and such top-up will be added to and used as part of your Prepaid Balance. It is your responsibility to ensure that you have registered a valid payment method for such automatic payments to be effected. From time to time, we may (but are not obliged to) allow your account to have a negative Prepaid Balance for a temporary period. In such cases, you will need to promptly top-up your account in order to continue using our Services. Without limiting our other rights and remedies under this Agreement, we reserve the right to suspend your account or the Services where you have a negative Prepaid Balance. We reserve the right to specify a maximum Prepaid Balance and to deduct any amounts owing by you to us under this Agreement (including Fees and otherwise) from the Prepaid Balance.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>4.8 Payment Terms.</strong> Payment obligations are non-cancelable and Services Fees, Taxes, and Communications Surcharges (collectively, “<strong>Fees</strong>”) once paid, are non-refundable to the greatest extent permitted by applicable law. Except as otherwise set out in an applicable Order Form(s) and subject to Section 4.11 (Payment Disputes), you will pay the Fees due under these Terms in accordance with the following applicable payment method: (a) if we agree that you may remit fees using a credit card, you represent and warrant that you are authorized to use that credit card, that any and all Fees may be billed to that credit card, and that payment of such Fees will not be declined, and you expressly authorize us and/or our third-party payment processor to charge the applicable Fees on said credit card; or (b) if we agree that you may remit fees using a direct debit, standing order or other form of automatic bank or payment mandate (“<strong>automatic debit mandate</strong>”), you represent and warrant that you are authorized to apply that automatic debit mandate, that any and all Fees may be discharged using that automatic debit mandate, that payment of such Fees will not be declined, and you expressly authorize us and/or our third-party payment processor to implement the automatic debit mandate; or (c) if we agree that you may remit fees by means of an invoice, invoices will be sent to you at the frequency set out in the applicable Order Form and you will pay the Fees due within fifteen (15) days of the date of the invoice. If you are subject to a credit limit, we may invoice you when (and each time) the credit limit is reached (if this arises earlier than the agreed invoicing frequency set out in the applicable Order Form) and such invoice is payable within fifteen (15) days of the date of the invoice. Notwithstanding the foregoing, you agree to pay any Fees incurred which exceed any applicable credit limit. We reserve the right to require you to set up an automatic debit mandate in order to use our Services.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>4.9 Late Payment.</strong> If you fail to pay the Fees in a timely manner, we may (a) assess and apply a late fee of the lesser of 1.5% per month on the value of the unpaid Fees or the maximum amount allowable by applicable law and/or (b) suspend the Services to all of your accounts until the Fees are paid in full (including any Fees due under a credit limit invoice under Section 4.8 (Payment Terms)). Without limiting or affecting the foregoing, where we permit you to pay by invoice and you fail to pay the Fees in a timely manner, we reserve the right, on the first (1st) day of the payment delinquency or thereafter to automatically (i) adjust any applicable credit limit and/or (ii) convert your payment terms to prepaid and cease to provide any further Services until either (y) the overdue Fees are paid and a valid automatic debit mandate is set up by you with respect to future Fee payments or (z) the overdue Fees are paid and a sufficient Prepaid Balance is put in place with respect to future Fee payments. You will be notified of such update via the Site or email or other written notification to the address you provided.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>4.10 Collection Notices.</strong> If you still fail to pay the Fees after we send you a notice via email, we may send overdue payment reminder notifications via alternate means of communication such as SMS and any other communication channels available using the contact information provided by you. You agree to receive such communications via those means. We may also use the services of an external debt collection agency and/or assign your debt to a debt factoring agency and may share your information with them solely for the purposes of fee collection and associated communications.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>4.11 Payment Disputes.</strong> You must notify us in writing within fifteen (15) days of the invoice date for any Fees that you wish to dispute, or you will not be able to bring a dispute. So long as you act promptly and cooperate with us to reach a resolution, we will not charge you a late fee or suspend the provision of the Services for unpaid Fees that are in dispute, unless we determine your dispute is not reasonable or brought in good faith. All undisputed fees remain due according to schedule.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>4.12 Affiliate Billing.</strong> Our Affiliates may directly bill you (a) for the Services they provide; or (b) as a billing agent or representative for us or another Affiliate of ours providing the Services.
            </Typography>

            {/* Intellectual Property and Data Section */}
            <Typography variant="h5" className="privacy-policy-subtitle" gutterBottom>
              5. Intellectual Property and Data
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>5.1 Ownership of the Services.</strong> We and/or our licensors, as applicable, own and reserve all right, title, and interest, including intellectual property rights, in and to the Services, the Documentation, and all modifications, extensions, customizations, scripts, or other derivative works of the Services and the Documentation. You may not reverse engineer, copy, dissemble, or decompile the Services, or remove any copyright, trademark or other proprietary rights notices contained in or on the Service.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>5.2 Our Data.</strong> We own and reserve all intellectual property rights in and to any data that is derived from the use of the Services, including data that does not directly or indirectly identify you, your Affiliates, or users of your Customer Application, and, subject to applicable law, data that is de-identified and aggregated such that it does not identify the identity of you or users of your Customer Application to any third party (“<strong>Fribe Data</strong>”). We grant to you a worldwide, limited-term, non-exclusive, non-transferable, royalty-free license during the applicable Term to access and use the Fribe Data solely for your use of the Services in accordance with the Agreement.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>5.3 Your Data.</strong> You exclusively own and reserve all intellectual property rights in and to each Customer Application and Customer Data. You grant us and our Affiliates the right to process Customer Data as necessary to provide the Services in a manner consistent with this Agreement including the Data Processing Agreement, and our Privacy Statement. Your agreement to these Terms constitutes agreement to the terms of the Data Processing Agreement, which is incorporated into these Terms by reference as an Annex.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>5.4 Application License.</strong> For the sole purpose of providing the Services, you grant us and our Affiliates a worldwide, royalty-free, non-exclusive license to reproduce, adapt, modify, translate, publish, publicly perform, publicly display, and distribute, any Customer Data introduced by you or on behalf of you into the Services, such as, but not limited to, software or web applications you create in the course of using the Services. The rights granted under this clause shall not be deemed to have lapsed as a consequence of any non-use under applicable laws.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>5.5 Feedback.</strong> We appreciate any suggestions, recommendations, or feedback regarding our Services or otherwise, but please note that they are entirely voluntary and we own and reserve all intellectual property rights in and to any feedback provided by you or any users of your Customer Application or our Services through your account. Where the foregoing assignment of right is prohibited by applicable law, you hereby grant us an exclusive, transferable, worldwide, perpetual, royalty-free, fully paid-up license (including the right to sublicense) to use and exploit all feedback as we may determine in our sole discretion. This does not limit or affect your rights or our obligations under the Data Processing Agreement.
            </Typography>

            {/* Confidentiality Section */}
            <Typography variant="h5" className="privacy-policy-subtitle" gutterBottom>
              6. Confidentiality
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>6.1 Definition.</strong> “Confidential Information” means any information or data disclosed by one Party (“Disclosing Party”) to the other (“Receiving Party”) that is marked as confidential or that should be reasonably understood to be confidential given the nature of the information and the circumstances surrounding disclosure (eg. Order Forms, Customer Data, pricing). Confidential Information does not include any information which: (a) is independently publicly available; (b) was rightfully known by Receiving Party prior to disclosure by Disclosing Party; (c) was lawfully disclosed to Receiving Party by another party not under any obligation or breach of confidentiality; or (d) is independently developed by or for Receiving Party without use of or reference to the Confidential Information of Disclosing Party.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>6.2 Use and Disclosure.</strong> Unless agreed to in writing, Receiving Party will not (a) use any Confidential Information of Disclosing Party for any purpose other than fulfilling Receiving Party’s rights and obligations under the Agreement; or (b) disclose Confidential Information to any third party except for entities (eg. Affiliates, contractors, legal counsel) (collectively, “Representatives”) who have a “need to know” in order for Receiving Party to fulfill its rights and obligations under these Terms. Representatives will be bound to protect Confidential Information under the same terms of confidentiality as the Receiving Party, and Receiving Party will be responsible for any breach by Representatives of those obligations.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>6.3 Compelled Disclosure.</strong> Receiving Party may disclose Confidential Information of Disclosing Party to the extent compelled by regulation, law, subpoena, court order, contractual obligations with telecommunications providers, or in response to an emergency disclosure request (as described in our Disclosure Policy), provided (i) Receiving Party promptly gives Disclosing Party prior notice of the compelled disclosure to the extent legally permitted and to the extent practicable in the circumstances (for example, in cases of an emergency disclosure request giving prior notice may not be practicable), (ii) Receiving Party discloses only the Confidential Information legally required or set out in the emergency disclosure request (as the case may be), and (iii) Receiving Party provides reasonable assistance, at Disclosing Party’s sole expense, if Disclosing Party wishes to contest the disclosure.
            </Typography>

            {/* Representations, Warranties, and Disclaimer Section */}
            <Typography variant="h5" className="privacy-policy-subtitle" gutterBottom>
              7. Representations, Warranties, and Disclaimer
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>7.1 Your Representations and Warranties.</strong> You represent and warrant that you have obtained all the necessary permissions or consents to deliver Customer Data to us for use and disclosure pursuant to this Agreement and that none of the Customer Data or Customer Applications violates any applicable law or any third party’s intellectual property or other right.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>7.2 Our Representations and Warranties.</strong> We represent and warrant that, during the Term, the Services will perform materially as set out in the applicable Documentation. To the greatest extent permitted by applicable law, our sole obligation, and your sole and exclusive remedy, in the event of any failure in this regard will be for us to, at our option, (a) take commercially reasonable efforts to correct the material failure; or (b) refund to you the Fees you actually paid for the time period during which the material failure affected the Services.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>7.3 Authority.</strong> Each Party represents and warrants that it has the legal right and authority to enter into the Agreement, to perform its obligations under the Agreement, and to grant the rights and licenses described in the Agreement.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>7.4 Anti-Corruption and International Trade Laws.</strong> Each Party warrants that it will comply with all applicable anti-corruption, anti-money laundering, sanctions, export laws, controls, and regulations, and other international trade laws, regulations, and governmental orders of the United States of America, the United Nations, the European Union, the United Kingdom or any other relevant governmental authority (“Trade and Anti-Corruption Laws”), including obtaining all necessary licenses and/or government approvals. You are solely responsible for the authorization and management of user accounts across geographic locations. You will promptly notify us in writing of any actual or potential violation of Trade and Anti-Corruption Laws in connection with your use of the Services and will take all appropriate actions to remedy or resolve such violations, including any actions requested by us.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>7.5 Disclaimer.</strong> EXCEPT FOR THE WARRANTIES EXPRESSLY PROVIDED IN SECTION 7.2 (OUR REPRESENTATIONS AND WARRANTIES), (A) THE SERVICES ARE PROVIDED “AS IS”; AND (B) TO THE GREATEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL OTHER WARRANTIES AND CONDITIONS (EXPRESS, IMPLIED, OR STATUTORY) INCLUDING ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR ANY WARRANTIES RELATED TO THIRD-PARTY TELECOMMUNICATIONS PROVIDERS, MESSAGEBIRD RESELLERS OR MESSAGEBIRD PARTNERS. YOU ACKNOWLEDGE THE INTERNET AND TELECOMMUNICATION PROVIDERS ARE INHERENTLY INSECURE. BETA PRODUCTS ARE PROVIDED “AS IS” WITH NO WARRANTIES AND REPRESENTATIONS. IF ANY PART OF THIS SECTION 7.5 IS DETERMINED TO BE UNENFORCEABLE SUCH THAT WARRANTIES AND REPRESENTATIONS CANNOT BE EXCLUDED, THEN ALL SUCH EXPRESS AND IMPLIED WARRANTIES WILL, TO THE GREATEST EXTENT PERMITTED BY APPLICABLE LAW, BE LIMITED IN DURATION FOR A PERIOD OF THIRTY (30) DAYS AFTER THE EFFECTIVE DATE OF THE AGREEMENT, AND NO WARRANTIES OR CONDITIONS WILL APPLY AFTER THAT PERIOD.
            </Typography>

            {/* Mutual Indemnification Section */}
            <Typography variant="h5" className="privacy-policy-subtitle" gutterBottom>
              8. Mutual Indemnification
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>8.1 Indemnification by Us.</strong> We will indemnify you and your Affiliates and their respective officers, directors, and personnel (collectively, “<strong>Customer Indemnified Parties</strong>”) on written demand against all damages, fines, penalties, settlement amounts pre-approved by us, costs, expenses, taxes, and other liabilities (including reasonable attorneys’ fees) (“<strong>Losses</strong>”) incurred or awarded against Customer Indemnified Parties in connection with any claim, action, demand, suit, or proceeding (“Claim”) made or brought against Customer Indemnified Parties by an unaffiliated third party alleging that your use of the Services violate their intellectual property rights (“<strong>Infringement Claim</strong>”), and we will take all reasonable steps necessary to defend such Infringement Claim at our expense. In the event of an Infringement Claim, we reserve the right to, at our option (a) modify the Services to make them non-infringing; or (b) terminate the infringing Services and refund you any unused pre-paid fees. We will have no liability or obligation under this Section 8.1 with respect to any Infringement Claim to the extent arising from or out of (a) your use of the Services in breach of the Agreement; (b) the combination of our Services with other applications, products, or services (including any applications, products or services of a third party such as a Fribe Partner, Fribe Reseller or third party to which a Connector or Integrator (each as defined in the Product Specific Terms) applies) where the Services would not by themselves be infringing; or (c) Beta Products or Services for which there is no, or you pay no, fee.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>8.2 Indemnification Conditions.</strong> Each Party will provide the other with prompt notice of any Claim. A Party’s failure to provide prompt notice to the other Party relieves the party of its obligation to defend and indemnify to the extent that the failure to provide notice materially harms the Party’s ability to defend the Claim. The indemnifying Party will assume exclusive conduct of the Claim (including litigation, settlement, and dispute resolution efforts) and the indemnified Party will provide reasonable assistance in connection with the conduct of the Claim at the indemnifying Party’s expense. The indemnified Party may appoint a non-controlling counsel to participate in the defense of the Claim at its own expense. The indemnifying Party will not settle any Claims for which it has an obligation to indemnify by admitting liability or fault on behalf of indemnified Party, nor create any obligation on behalf of indemnified Party, without indemnified Party’s prior written consent, which will not be unreasonably withheld.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>8.3 Exclusive Remedy.</strong> This Section 8 (Mutual Indemnification) states indemnifying Party’s sole liability to, and indemnified Party’s exclusive remedy against, the other Party for any third-party claims described in this Section, save that this shall not limit or preclude our right to terminate or suspend your Services where we would otherwise be entitled to do so under this Agreement.
            </Typography>

            {/* Publicity Section */}
            <Typography variant="h5" className="privacy-policy-subtitle" gutterBottom>
              9. Publicity
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              You grant us the right to use your name, logo, and a description of your use case to refer to you on our website, customer lists, or marketing or promotional materials, subject to your standard trademark usage guidelines expressly provided to us.
            </Typography>

            {/* Term, Termination, and Survival Section */}
            <Typography variant="h5" className="privacy-policy-subtitle" gutterBottom>
              10. Term, Termination, and Survival
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>10.1 Term.</strong> These Terms commence on the date you accept them (or, where an Order Form applies, on the date specified in the Order Form) and continue until all Order Forms or Services used by you on the Site have expired or have been terminated or, in respect of Services you use via our Site without a specified duration, you no longer use any Services and unregister your account.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>10.2 Order Form Term.</strong> We will specify your subscription period to the Services in the applicable Order Form or in the customer portal on the Site (the “Initial Term”). Unless otherwise noted in the Order Form or on the Site, subscriptions will automatically renew for additional successive periods of equal duration to the Initial Term (each, a “<strong>Renewal Term</strong>”, and together with the Initial Term, the “Term”) unless either Party gives the other notice of non-renewal at least thirty (30) days before the end of the Term. The applicable fee for any Renewal Term will be determined using the then-current list price applicable on the Site for such renewed Services unless different renewal pricing is specified in the Order Form. Unless you cancel your subscription in accordance with this Section or as specified in any Order Form, your subscription will automatically renew on the first day following the end of the previous Initial Term or Renewal Term and, as applicable, we will charge your credit card, apply an automatic debit mandate, issue an invoice or deduct fees from the any Prepaid Balance for the applicable Fees.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>10.3 Termination for Material Breach and Other Grounds.</strong> Either Party may terminate the affected Order Form(s) or Services used by you in the event of a material breach if, after providing written notice of the breach, the other Party does not remedy the breach within fifteen (15) days. In the event of your material breach, we may also (i) terminate the Agreement, (ii) close all of your accounts, and/or (iii) prohibit you from creating any new accounts. We may also terminate or suspend this Agreement or the provision of certain Services with immediate effect by notifying you in the event we have substantiated reason to believe that your use of the Services (a) would constitute a breach of third-party application terms (including those set out in the Product Specific Terms) or the terms of this Agreement in respect thereof; (b) is contrary to applicable laws, regulations, or public order; or (c) includes transmission of inappropriate content under Section 3.2.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>10.4 Termination for Insolvency.</strong> Either Party may, with immediate effect, terminate this Agreement (and we may close your account) by written notice in the event the other Party becomes subject of a petition in bankruptcy or any other proceeding relating to insolvency, suspension of payments, receivership, or liquidation.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>10.5 Refund or Payment upon Termination.</strong> If you terminate these Terms because of our material breach under Section 10.3 (Termination for Material Breach), we will refund to you any prepaid Fees covering the remainder of the term of all Order Forms or Services used by you in the customer portal on the Site after the effective date of termination. If we terminate these Terms because of your material breach under Section 10.3 (Termination for Material Breach), you will pay us any unpaid Fees covering the remainder of the Term of all Order Forms or Services used by you in the customer portal on the Site. In no event will termination relieve you of your obligation to pay any Fees payable to us for the period prior to the effective date of termination.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>10.6 Consequences of Termination or Expiration.</strong> Upon the effective date of termination or expiration of the Agreement or any Order Form: (a) all rights, licenses, and subscriptions granted to you under any affected Order Form and the Agreement will immediately terminate; (b) you will immediately cease all use of, and access to, your account and the relevant Services; (c) you will immediately either return or destroy (at our discretion) all Fribe Data, our Confidential Information, and any user IDs that are in your possession; and (d) we will delete any of your Confidential Information or Customer Data stored by us within forty-five (45) days after the effective date of expiration or termination, unless a different statutory retention period applies or as necessary to prosecute or defend a legal claim, in which case we will only retain such information for as long as needed to resolve the claim or comply with applicable law. In the event of termination or expiration of an Order Form, (c) and (d) shall not apply to the extent the Fribe Data, Confidential Information, user IDs, and Customer Data are still required in connection with the use of other Services than the terminated or expired Service(s). In the event you terminate this Agreement under Section 11.3 (Termination for Material Breach), we will reasonably cooperate to assist in your transition to another provider.
            </Typography>

            {/* Changes to These Terms Section */}
            <Typography variant="h5" className="privacy-policy-subtitle" gutterBottom>
              11. Changes to These Terms
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              From time to time, we may update this Agreement. If we make material changes, we will notify you, such as by posting an announcement on our website or sending you an in-application notice or email. To the greatest extent permitted by applicable law, the new Agreement will take immediate effect, and your continued use of the Services following our posting or notice of the changes will constitute your acceptance of the updated Agreement. If applicable law requires us to give additional notice in respect of some or all of our Services, changes will automatically take effect regarding your use of the relevant Services upon expiry of such notice period (unless you terminate during that period) or upon your earlier agreement to such changes. If you have a right under applicable law to terminate this Agreement upon receipt of such notice (or if this Section 12 would be unenforceable under applicable law if you did not have such a right), you will not be charged a fee for early termination where you exercise that right under applicable law, but any fees previously paid by you are non-refundable and any fees owing continue to remain due and payable. We agree that changes to these Terms under this Section 12 will not materially diminish the protections under the Security Overview and/or the features or functionality of the Service.
            </Typography>

            {/* General Section */}
            <Typography variant="h5" className="privacy-policy-subtitle" gutterBottom>
              12. General
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>12.1 Order of Precedence.</strong> In the event of any conflict or inconsistency among the following documents, the order of precedence will be: (a) the Data Processing Agreement; (b) the applicable Order Form or the customer portal on the Site; (c) Product Specific Terms; (d) any applicable SLA; (e) these Terms; and (f) the applicable Documentation.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>12.2 Relationship.</strong> Each Party is an independent contractor in the performance of this Agreement and nothing in these Terms is intended to create or will be construed as creating an employer-employee relationship or a partnership, agency, joint venture, or franchise. Neither Party has the authority to commit the other Party in any way and will not attempt to do so or imply that it has the right to do so. Nothing in these Terms is intended to prevent: (a) us from marketing, licensing, selling, or otherwise providing Services to any third party; and (b) you from obtaining services similar to the Services from a third party.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>12.3 Severability.</strong> If a court of competent jurisdiction holds any provision of these Terms to be contrary to applicable law, that provision will be changed and interpreted so as to best accomplish the objectives of the original provision to the greatest extent allowed by law and the remaining provisions of these Terms will remain in full force and effect.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>12.4 Notices.</strong> If you need to provide notice to us under these Terms, you may do so in writing via email to  <Link 
  to="/" 
  style={{ 
    color: '#7f1fdf', 
    textDecoration: 'none', 
   
  }}
>
info@fribe.io </Link>, or (b) by registered prepaid post to the applicable Fribe entity with whom you are contracting, as listed in Section 15, with a PDF copy to <Link 
  to="/" 
  style={{ 
    color: '#7f1fdf', 
    textDecoration: 'none', 
   
  }}
>
info@fribe.io </Link> Except as permitted in Section 12 (Changes to these Terms) or elsewhere in these Terms and the Agreement, if we need to provide notice to you, we will do so, at our election, in writing via email to the email address you designate in your account or by letter to the address associated with your account. It is your responsibility to keep all email and postal addresses associated with your account current and accurate. Unless otherwise expressly provided in this Agreement, please note that communications through our general support messaging system or to your account representative will not constitute legal notice where notice is required to us under this Agreement or any law or regulation unless info@fribe.io is copied on the communication.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>12.5 Force Majeure.</strong> Except for the payment of Fees, each Party will be excused from any failure or delay of performance to the extent caused by unavoidable events beyond its reasonable control and not caused by it such as natural catastrophes, laws, orders, regulations, directions or actions of governmental authorities, act of war, hostility, or sabotage, failure of telecommunication or digital transmission links, or failure of any third-party operating systems, platforms, applications or networks not under the Party’s reasonable control. All Parties will take reasonable actions to minimize the consequences of these events. In addition, a Party will be excused from future performance under this Agreement, if (i) the other Party becomes, directly or indirectly, subject to sanctions or restrictive measures imposed by competent governmental authorities, or (ii) the performance of any aspect of this Agreement would require that Party to engage in a transaction with a person, directly or indirectly, subject to such sanctions or restrictive measures.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>12.6 Waiver.</strong> No failure or delay by either Party in exercising any right or enforcing any provision under these Terms will constitute a waiver of that right, provision, or any other provision. Any waiver must be in writing and signed by each Party to be legally binding. With the exception of the rights explicitly provided in this Agreement, each Party waives any rights to wholly or partially terminate or rescind this Agreement or to claim termination, rescission, or amendment of this Agreement, to the greatest extent permitted by applicable law.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              <strong>12.7 Assignment.</strong> Neither party may assign or transfer any of its rights or obligations under this Agreement (including under all Order Forms) in whole or in part, whether by operation of law or otherwise, without the prior written consent of the other party (not to be unreasonably delayed or withheld); provided, however, that either party may assign this Agreement in its entirety (including all Order Forms), without prior consent (but subject to written notice promptly following the event) in connection with a merger, acquisition, corporate reorganization, or sale of all or substantially all of the relevant party’s assets to a party that is not a competitor of the other party. Any attempted assignment or transfer by either party in violation hereof will be void. Subject to the foregoing, each and all of the provisions in this Agreement will be binding on and inure to the benefit of the parties to this Agreement and their respective administrators, successors, and permitted assigns.
            </Typography>

            {/* Contracting Entity Section */}
            <Typography variant="h5" className="privacy-policy-subtitle" gutterBottom>
              13. Contracting Entity
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              For all Customers with a contract prior to 3 May 2023, your contract remains with the legal entity with whom you contracted at that date on the terms and conditions applicable at that date.
            </Typography>
            <Typography variant="body1" className="privacy-policy-content" paragraph>
              For all new Customers on and following 14 Sep 2023, unless otherwise expressly specified in an applicable Order Form, the Fribe entity entering into this Agreement, the law that governs this Agreement, and the courts that have jurisdiction over any dispute between the Parties depends on where you are domiciled or the applicable Services as specified in the table below.
            </Typography>
          </Box>
        </div>
      </div>
      <CommonFooter />
    </>
  );
};

export default Home;
