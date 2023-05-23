"use client"

import React, { useState } from 'react';
import { useTheme } from 'next-themes';

const TocDropDownButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  return (
    <div className="relative flex flex-col items-center justify-center">
      <button
        onClick={toggleDropdown}
        className={`bg-transparent flex flex-row ${isDarkMode ? 'text-primary' : 'text-dark-primary'} py-2 rounded`}
      >
        <p className='mr-72'>TERMS OF USE</p>
        <p>+</p>
      </button>
      {isOpen && (
        <div className="mt-2 w-3/4 bg-white shadow-lg rounded p-4">
          <p className="text-gray-700 text-sm">
            This Website, currencycovenantshop.com (hereinafter, referred to as “the Website”) is operated by CURRENCY COVENANT LLC (hereinafter referred to as “us” “we” or “our”). The terms "you” or “your" refer to you, the consumer and/or user of the Website. “User” means all users of “the Website”. We offer this Website, including all information, products and services available from this Website, to you conditioned upon your acceptance of all the terms, conditions, policies and notices stated herein.

            YOUR CONTINUED USE OF THE WEBSITE CONSTITUTES YOUR AGREEMENT TO THESE TERMS OF USE.
            If you do not agree with these Terms of Use, you should not use the Website.

            Notice Regarding Dispute Resolution: These Terms contain provisions that govern how any legal claims that might arise between us and you will be handled. See Mandatory Arbitration Provision For Resolution Of Claims or Disputes (Section 12 below) “Arbitration” below), which includes a binding obligation to resolve disputes on an individual (i.e. non-class action basis), which will, subject to limited exceptions, require you to submit claims you have against us to binding arbitration or small claims court.

            YOU SHALL NOT USE THE WEBSITE FOR ANY ILLEGAL PURPOSES, AND YOU WILL USE IT IN COMPLIANCE WITH ALL APPLICABLE LAWS AND REGULATIONS. YOU SHALL NOT USE THE WEBSITE IN A WAY THAT MAY CAUSE THE WEBSITE TO BE INTERRUPTED, DAMAGED, RENDERED LESS EFFICIENT OR SUCH THAT THE EFFECTIVENESS OR FUNCTIONALITY OF THE WEBSITE IS IN ANY WAY IMPAIRED. YOU AGREE NOT TO ATTEMPT ANY UNAUTHORIZED ACCESS TO ANY PART OR COMPONENT OF THE WEBSITE.

            1. Intellectual Property Ownership and Use

            1.1 All content on the Website, including text, graphics, logos, button icons, images, and software, is the property of Curreny Covenant Merchandising and is protected by United States and international copyright laws. Except as otherwise permitted in these Terms, You may only electronically copy and print hard copies of pages from this website solely for personal, non-commercial purposes related to placing an order or shopping with octobersveryown.net. Any other use of our website, including reproduction and internet links, is strictly prohibited without our prior written permission.

            1.2 “Currency Covenant”, the currencycovenantshop.com domain name, the logos, graphics and button icons used on our site and all graphics and designs shown or displayed in our merchandise including the “Currency Covenant” designs and "C" designs are trademarks of Currency Covenant IP Holdings used under license by Currency Covenant Merchandising. Your use of our Website is subject to applicable laws governing ownership and use of intellectual property, including our trademarks and copyrights. You acknowledge and agree that the trademark, logos, copyrights and any and all other intellectual property rights in all material or content contained within this Website shall remain at all times vested in us or, in the cases where we are using such material or content belonging to a third party, in the owner of such material or content.

            1.3 We grant you the limited right to access and make use of the Website as our user. However, you shall not: a) reproduce, duplicate, copy, sell or otherwise exploit the Website or any image, page layout, page design, trade dress, trademark, logo or other content (“Site Content”) for any commercial purpose; b) use a robot, spider or data mining or extraction tool or process to monitor, extract or copy Site Content; c) use any meta tags, search terms, key terms, or the like that contain the Website’s name or our trademarks; d) engage in any activity that interferes with the Website or another user’s ability to use the Website; e) modify, create derivative works from, reverse engineer, decompile or disassemble any technology used to provide the Website and the goods or services offered on the Website; or f) assist or encourage any third party in engaging in any activity prohibited by these Terms.

            1.4 You may not use, copy, distribute, or exploit any of the Site Content in any manner without our prior written permission or as otherwise permitted by these Terms

            2. Infringement Notice

            2.1 We respect the intellectual property rights of others and require that our users do the same. If you believe your work has been copied in a manner that constitutes copyright infringement, or you believe your rights are otherwise infringed or violated by anything on the Website, please notify us by sending an email at the following address: info@currencycovenantshop.com

            2.2 In order for us to more effectively assist you, any notification received concerning alleged infringement of intellectual property rights or confidential or proprietary information must include all of the following:

            a. A physical or electronic signature of the owner of the right claimed to be infringed or the person authorized to act on the owner’s behalf;

            b. A description of the copyrighted work or other right you claim has been infringed or violated;

            c. Information reasonably sufficient to locate the material in question on the Website;

            d. Your name, address, telephone number, e-mail address and all other information reasonably sufficient to permit us to contact you;

            e. A statement by you that you have a good faith belief that the disputed use is not authorized by the rightful owner, its agent or the law; and

            f. A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the owner of the right claimed to be infringed or violated or are authorized to act on behalf of the owner.

            3. Errors and Inaccuracies

            3.1 We strive to provide complete, accurate, up-to-date information on the Website. Unfortunately, despite those efforts, human or technological errors may occur. The Website may contain typographical mistakes, inaccuracies, or omissions, some of which may relate to pricing and availability, and some information may not be complete or current. We reserve the right to correct any errors, inaccuracies or omissions, including after an order has been submitted, and to change or update information at any time without prior notice.

            3.2 You acknowledge that the particular technical specifications and settings of your computer and its display could affect the accuracy of its display of the colors and look of products offered on the Website.

            3.3 The inclusion of any products or services on the Website at a particular time does not imply or warrant that these products or services will be available at any time. Certain weights, measures and similar descriptions are approximate and are provided for convenience purposes only. We attempt to ensure that information on the Sites is complete, accurate and up-to-date, including the applicable colors; however, the actual color you see depends on your device set-up, and We cannot guarantee that your device will accurately display such colors. Despite our efforts, the information on the Sites may occasionally be inaccurate, incomplete or out-of-date. We make no representation as to the completeness, accuracy or currency of any information on the Sites. For example, products or services included on a Site may be unavailable, may have different attributes than those listed, or may carry a different price than what is stated on the Site. In the event of a pricing error or discrepancy on a Site with respect to products or services, We reserve the right to cancel any orders (or partial orders) for such products or services.

            4. Changes to Website or These Terms of Use

            4.1 Other than as may be required by law, we reserve the right to modify or withdraw, temporarily or permanently, the Website (or any part of) with or without notice to you, and you confirm that we shall not be liable to you or any third party for any modification to withdraw or withdrawal of the Website or any portion of it.

            4.2 We may alter these Terms of Use from time to time, and your use of the Website (or any part of the Website) following such change shall be deemed to be your acceptance of such change. It is your responsibility to check regularly to determine whether the Terms of Use have been changed. If you do not agree to any change to the Terms of Use then you should immediately stop using the Website.

            4.3 The Website is subject to constant change. You will not be eligible for any compensation because you cannot use any part of the Website or because of a failure, suspension or withdrawal of all or part of the Website.

            5. External Sites and Resources

            currencycovenantshop.com uses secure processing called SSL (Secure Sockets Layer) Encryption Technology, which is a protocol developed for the transmission of private information over the internet. SSL uses a private key to encrypt your data, including your credit card information, so that it cannot be read while being transferred over the internet.

            We are not responsible for the terms of use, or availability, of any websites owned or controlled by third-parties that directed you or linked to the Website. Similarly, we are not responsible for the terms or content of any third-party website to which we may direct or link you. We do not endorse and are not responsible or liable, directly or indirectly, for the privacy practices or the content (including misrepresentative or defamatory content) of any third-party websites, including (without limitation) any advertising, products or other materials or services on or available from such websites or resources, nor for any damage, loss or offense caused or alleged to be caused by, or in connection with, the use of or reliance on any such content, goods or services available on such third-party external sites or resources.

            IF YOU DECIDE TO ACCESS ANY OTHER SITE LINKED TO OR FROM THE SITES, YOU DO SO ENTIRELY AT YOUR OWN RISK.

            6. Orders, Price and Resale

            6.1 You may purchase products only for personal use and not for resale. By placing your order, you certify that you are purchasing products for personal use only and not for resale. We reserve the right to refuse orders for any reason without explanation and in our sole discretion, even after your receipt of an order confirmation or after your credit card has been charged.

            6.2 Nothing on the Website constitutes a binding offer to sell products described on the Website or to make such products available in your area. The prices displayed on the Website are quoted in U.S. dollars and must be paid in U.S. dollars. In the event a product is listed at an incorrect price, we have the right to refuse or cancel orders placed for the product listed at the incorrect price, regardless of whether the order has been confirmed or your credit card charged. If your credit card has already been charged for the purchase and your order is canceled, we will issue a credit to your credit card account.

            6.3 DUTIES AND TAXES FOR ORDERS SHIPPED WITHIN CANADA, THE UNITED STATES OR MEXICO. In accordance with USMCA, orders placed by and shipping to residents of the USMCA countries (Canada, the United States, or Mexico) are exempt from paying customs duties on any merchandise made in any of the USMCA countries. Applicable HST or Provincial Sales Tax is charged to those orders shipped within Canada. All customers in the United States and Mexico are responsible for any Sales Tax based on the shipping destination.

            6.4 DUTIES AND TAXES FOR INTERNATIONAL ORDERS (OUTSIDE OF NORTH AMERICA). Shipping and handling charges for overseas orders are based on the destination country and the merchandise you order. Please note: the prices we quote do not include any import/customs duties and tax charges applicable to your order.

            6.5 WE ARE NOT RESPONSIBLE FOR ANY CUSTOMS AND/OR DUTIES & TAXES APPLIED TO YOUR ORDER. You are personally responsible for paying these fees upon receipt or delivery of the order. A general guideline to follow when estimating these fees should be to calculate 20% of the total dollar amount of the items ordered. However, this is just a guideline as the actual fees will vary based on the country you are in. You should check with your local Customs Department for more detailed information on how to estimate these additional charges.

            6.6 SHIPPING. See the chart below for estimated prices and delivery times. Please allow up to 5 additional business days on top of delivery times for order processing and verification. Note that select merchandise may have a higher shipping cost. These costs will be specified on the product page.

            Region Rate Estimated Delivery Time

            USA $15 USD 5-10 Business Days

            Rest of World $35 USD 7-14 Business Days

            The delivery times are only estimates and orders may experience delays during periods of high traffic. Please check back with us periodically for any updates regarding our shipping policies.

            NOTE: that we do not ship to P.O. Boxes.

            7. Online Services

            7.1 The Website may contain various interactive portions, such as a place for consumer reviews, user forums, message boards or other types of interactive features that allow users to post content on our Website ("Online Services"). We have no obligation to actively monitor the Online Services, but we reserve the right to do so. We are not responsible for, nor do we vouch for the accuracy of, the content of any user comments or other content that may be posted or uploaded by a user. User comments and other content posted or uploaded by a user (“User Content”) do not necessarily reflect our views or opinions. We reserve the right, in our sole discretion, to edit, delete, or refuse to post User Content, for any reason whatsoever.

            7.2 If you believe that any User Content is inaccurate or objectionable, you should contact us by sending an email to info@currencycovenantshop.com Please provide us with detailed information about the nature and location of the alleged objectionable material so that we may easily locate and investigate the same.

            7.3 By using this Website, you agree that:

            a. You will not upload, post, email or otherwise transmit any material or other content that: (i) is defamatory, libelous, disruptive, threatening, invasive of a person's privacy, harmful, abusive, harassing, obscene, hateful, or racially, ethnically or otherwise objectionable; or that otherwise violates any law; (ii) contains software viruses or any other computer codes, files or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware or telecommunications equipment; (iii) infringes any person or entity's intellectual property rights (including but not limited to, patent, trademark, trade secret, copyright or other intellectual property right).

            b. You will not impersonate any person or entity or otherwise misrepresent your affiliation with a person or entity.

            c. You will not repeatedly post the same or similar message ("flooding") or post excessively large or inappropriate images or content.

            d. You will not distribute or publish unsolicited promotions, advertising or solicitations for funds, goods or services, including but not limited to, junk mail, spam and chain letters.

            7.4 User Content becomes public information. You should be very careful about posting personally identifiable information such as your name, address, telephone number or email address. If you post personal information online, you may receive unsolicited messages from other Users in return.

            7.5 You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password, regardless of whether such use is authorized by you or not.

            7.6 If you submit any User Content to this Website, you grant to us, and any of our successors, licensees, assigns, and affiliates, a royalty-free, perpetual, irrevocable, non-exclusive and fully sub-licensable right and license to use, reproduce, modify, edit, adapt, publish, translate, create derivative works from, distribute, perform and display the User Content, and in any other media, now known or hereafter devised.

            7.7 If you choose to communicate or meet with other users of the Website, you are doing so at your own risk. We do not, and have no obligation to, verify the identity of or otherwise screen our users for any reason. You acknowledge that there are risks, including the risk of physical harm, when dealing with strangers or people acting under false pretenses. You assume all risks associated with dealing with other users with whom you may come in contact through the Website.

            7.8 This Website is meant for users 18 years old and over. We will not knowingly allow any user less than 18 years of age to submit any User Content to our Website.

            8. Sales, Shipping, and Returns

            8.1 For a multiple product orders, we will make every attempt to ship all products contained in the order at the same time. Products that are unavailable at the time of shipping will be shipped as they become available, unless you inform us otherwise. You will only be charged for products contained in a given shipment, plus any applicable shipping charges. You will only be charged for shipping at the rate quoted to you on your purchase receipt. The entirety of this shipping charge may, in our sole discretion, be applied to the first product(s) shipped on a multiple shipment order.

            8.2 Your receipt of an electronic or other form of order confirmation does not signify our acceptance of your order, nor does it constitute confirmation of our offer to sell. We reserve the right at any time after receipt of your order to accept or decline your order for any reason or to supply less than the quantity you ordered of any item.

            8.3 We will ship your order as it becomes available. Usually, products ship the same day if ordered by the close of business in our time zone, or by the next business day if your order is received after this time and for orders received on Saturday, Sunday or any major holiday. However, there may be times when a product you have ordered is out-of-stock, which will delay fulfilling your order. We will attempt keep you informed of any products that you have ordered that are out-of-stock and unavailable for immediate shipment. You may cancel your order at any time prior to shipping. We cannot guarantee when an order will arrive. Consider any shipping or transit time offered to you by us only as an estimate. We encourage you to order in a timely fashion to avoid delays caused by shipping or product availability

            8.3 We will gladly accept the return of products that are defective, in our discretion, due to defects in manufacturing and/or workmanship for thirty (30) days from the date of purchase. Fulfillment mistakes that we make resulting in the shipment of incorrect product to you will also be accepted for return thirty (30) days from the date of purchase. We may refuse a refund request if we find evidence of fraud, refund abuse, or other manipulative behaviour. No refunds or exchanges will be permitted.

            8.4 We shall automatically charge and withhold the applicable sales taxes. All sales are final.

            8.5 Our Return Policy (published at https://currencycovenant.com/support/return-policy) is hereby incorporated by reference.

            9. Disclaimers

            9.1 WE MAKE NO WARRANTIES, WHETHER EXPRESS OR IMPLIED IN RELATION TO THE ACCURACY OF ANY INFORMATION ON THE WEBSITE. THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY REPRESENTATION. WE MAKE NO WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, IN RELATION TO THE WEBSITE, INCLUDING BUT NOT LIMITED TO, IMPLIED WARRANTIES OF SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, COMPATIBILITY, SECURITY, ACCURACY, CONDITION OR COMPLETENESS, OR ANY IMPLIED WARRANTY ARISING FROM COURSE OF DEALING OR USAGE OR TRADE.

            9.2 WE MAKE NO WARRANTY THAT THE WEBSITE WILL MEET YOUR REQUIREMENTS OR WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE WEBSITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR BUGS OR ARE FULLY FUNCTIONAL, ACCURATE, OR RELIABLE.

            9.3 AS SET FORTH IN THE WEBSITE PRIVACY POLICY YOU ACKNOWLEDGE THAT WE CANNOT GUARANTEE, AND THEREFORE SHALL NOT BE IN ANY WAY RESPONSIBLE FOR, THE SECURITY OR PRIVACY OF THE WEBSITE AND ANY INFORMATION PROVIDED TO OR TAKEN FROM THE WEBSITE BY YOU. As further set forth in paragraph 16 below, the provisions of our Privacy Policy are hereby incorporated into this document by reference and such terms of the Privacy Policy shall be considered a part of this document and shall, likewise with this document, govern the relationship between you and us.

            10. Limitations on Liability

            NEITHER WE NOR OUR PROVIDERS, VENDORS, DISTRIBUTORS OR CONTRACTORS SHALL BE LIABLE FOR ANY ECONOMIC LOSSES (INCLUDING WITHOUT LIMITATION LOSS OF REVENUES, PROFITS, CONTRACTS, BUSINESS OR ANTICIPATED SAVINGS) OR ANY LOSS OF GOODWILL OR REPUTATION, OR ANY LOSS OR CORRUPTION OF DATA, OR ANY SPECIAL OR INDIRECT OR CONSEQUENTIAL LOSSES ARISING OUT OF YOUR USE OF THE WEBSITE; IN ANY CASE WHETHER OR NOT SUCH LOSSES WERE WITHIN THE CONTEMPLATION OF US AT THE DATE ON WHICH THE EVENT GIVING RISE TO THE LOSS OCCURRED.

            Under no circumstances, including, but not limited to negligence, shall we or our providers, vendors, distributors or contractors be liable for any damages to, or viruses that may infect your computer equipment or other property, or any loss of data, on account of your access to, use of, or browsing on the site, or your downloading of any materials, data, text, images, video, audio, or other information from the site or associated with any email or links sent to you by us. In no event shall we, our providers or distributors, be liable for any injury, loss, claim, damage, or any special, punitive, exemplary, direct, indirect, incidental, or consequential damages of any kind (including, but not limited to, lost profits , lost business, or lost savings), whether based in contract, tort, strict liability, or otherwise, that arise out of or are in any way connected with the use, or the inability to use, the site or the services or materials on the site, even if advised of the possibility of such damages.

            11. Indemnification

            YOU AGREE TO BE FULLY RESPONSIBLE FOR (AND FULLY INDEMNIFY US AGAINST) ALL CLAIMS, LIABILITY, DAMAGES, LOSSES, COSTS AND EXPENSES, INCLUDING LEGAL FEES, SUFFERED BY US AND ARISING OUT OF ANY USER CONTENT YOU POST TO THE WEBSITE AND ANY BREACH OF YOUR REPRESENTATIONS AND WARRANTIES OR THESE TERMS OF USE BY YOU OR ANY OTHER LIABILITIES ARISING OUT OF YOUR USE OF THE WEBSITE, OR THE USE BY ANY OTHER PERSON ACCESSING THE WEBSITE USING YOUR COMPUTER OR INTERNET ACCESS ACCOUNT.

            12. Mandatory Arbitration Provision For Resolution Of Claims or Disputes.

            12.1 By visiting the Website, you agree that, except as otherwise specified herein, the laws of the State of California, will govern any dispute of any sort that might arise between us or any of our affiliates regarding your visit and use of our website.

            12.2 Informal Process First: Both you and we agree that in the event of any dispute between us, the party wishing to address the dispute must contact the other party in writing, including by e-mail, and advise the other party of the dispute in reasonable detail as well as informing the other party of the remedy being sought. All Notices to us shall be sent to the following address: info@currencycovenant.com. The parties shall then make a good faith effort to resolve the dispute before resorting to more formal means of resolution. In the event that the dispute is not resolved within thirty days of receipt of the written notice, the party raising the dispute may proceed to mandatory arbitration as set forth below.

            12.3 Mandatory Arbitration of Disputes: If the informal process described in paragraph 12.2 does not fully resolve a dispute, then ANY AND ALL DISPUTES BETWEEN YOU AND US WILL BE RESOLVED BY BINDING ARBITRATION. YOU HEREBY AGREE TO GIVE UP YOUR RIGHT TO GO TO COURT to assert or defend your rights under this contract, except for matters that may be taken to small claims court. Your rights will be determined by a neutral arbitrator, NOT a judge or jury. You agree that any dispute arising out of or relating to this Agreement, including with respect to the interpretation of any provision of this Agreement or concerning the performance or obligations of us or you, shall be resolved by mandatory and binding arbitration submitted to JAMS in accordance with its Commercial Arbitration Rules at the request of either us or you pursuant to the following conditions:

            a. Place of Arbitration Hearings. Unless you elect to conduct the arbitration by telephone or written submission, an video-call arbitration hearing will conducted using a video call platform that is most convienent.

            13. Investigations of Violations of These Terms

            We may investigate any reported violation of these Terms of Use and take any action that we deem appropriate. Such action may include, but is not limited to, issuing warnings, removing posted content and/or reporting any activity that we suspect violates any law or regulation to appropriate law enforcement officials, regulators, or other third parties.

            14. Notice for California Users

            Under California Civil Code Section 1789.3, residents of California who use this Website are entitled to know that they may file grievances and complaints with: the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs, in writing at 400 R Street, Suite 1080, Sacramento, California 95814, or by telephone at (916) 445-1254 or (800) 952-5210, or by email at dca@dca.ca.gov.

            15. Notice for New Jersey Users

            Paragraph 16.1 of these Terms of Use does not apply to New Jersey residents or New Jersey transactions.

            Paragraph 10 of these Terms of Use is modified as follows for New Jersey residents or New Jersey transactions.

            THE LIMITATION OF LIABILITY CONTAINED IN THESE TERMS & CONDITIONS DOES NOT APPLY TO DAMAGES ARISING OUT OF OUR NEGLIGENCE OR WILLFUL MISCONDUCT OR ANY OTHER CAUSE OF ACTION ARISING FROM OUR ACTS BUT DOES APPLIES TO THE ACTS OR OMISSION OF OTHERS. OUR AGGREGATE LIABILITY FOR ALL CLAIMS UNDER ANY CIRCUMSTANCES WILL NOT EXCEED $1,000.00 OR YOUR ACTUAL, OUT-OF-POCKET COSTS AND DAMAGES. IN NO EVENT SHALL WE BE LIABLE FOR LOST PROFITS, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES AS STATED IN THESE TERMS AND CONDITIONS.

            16. Miscellaneous

            16.1 If any part of these Terms of Use shall be deemed unlawful, void or for any reason unenforceable, then that provision shall be deemed to be severable from these Terms of Use and shall not affect the validity and enforceability of any of the remaining provisions of the Terms of Use.

            16.2 You acknowledge that the Privacy Policy, these Terms of Use, as well as any other terms or policies stated on our Website are part of the overall terms governing your use of the Website and that using our Website signifies your consent to all of the foregoing. You also agree that by using this Website, you are subject to all applicable laws, and that the Website’s use is undertaken at your own risk. We reserve the right to change these Terms of Use at any time, without advanced notice. If we decide to change our Terms of Use, we will post those changes on this page.

            16.3 These Terms of Use, our Privacy Policy, our Return Policy (published at https://currencycovenantshop.com/support/return-policy) and any other terms or agreements that may be posted on the Website (as may be amended from time to time) (“Website Agreements”) contain the entire agreement between you and us relating to the Website and your use of the Website and supersede any previous agreements, arrangements, undertakings or proposals, written or oral, between you and us in relation to such matters. No oral explanation or oral information shall alter the interpretation of these Website Agreements. You confirm that, in agreeing to accept these Website Agreements, you have not relied on any representation except insofar as the same has expressly been made a representation in these Website Agreements, and you agree that you shall have no remedy in respect of any representation which has not become a term of these Website Agreements.

            16.4 You may send us notices or communicate with us by email at info@currencycovenantshop.com. If you send us an email that asks for a response, and you do not receive a response within ten (10) business days, please send us another email as we may not have received your previous email. When you send e-mail to us, you are communicating with us electronically, and you agree that we may communicate with you electronically. You acknowledge that that communications by email are not considered confidential communications. Therefore, please do not send us any confidential information by email          </p>
        </div>
      )}
    </div>
  );
};

export default TocDropDownButton;

