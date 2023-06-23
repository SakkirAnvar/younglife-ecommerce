import React from "react";
import Layout from "../components/Layout/Layout";
import '../styles/policy.css'

const Policy = () => {
  return (
    <div>
      <Layout title={"Privacy policy"}>
        <div className="policytitle text-center mt-4">
          <h1>Terms and Policy</h1>
        </div>
        <div className="contentpolicy">
          <h5>1. DEFINITIONS</h5>
          <p>As used herein and throughout this Agreement:</p>
          <p>
            1.1 Agreement means the entire content of this Basic Terms and
            Conditions document, the Proposal document(s), Schedule A, together
            with any other Supplements designated below, together with any
            exhibits or schedules hereto.
          </p>
          <p>
            1.2 Client Content means all materials, information, photography,
            writings, and other creative content provided by Client for use in
            the preparation of and/or incorporation in the Deliverables.
          </p>
          <h5>2. FEES AND CHARGES</h5>
          <p>
            Fees. In consideration of the Services to be performed by Designer,
            Client shall pay to Designer fees in the amounts and according to
            the payment schedule outlined in the Proposal, and all applicable
            sales, use or value-added taxes, even if calculated or assessed
            after the payment schedule.
          </p>
          <h5>3. RELATIONSHIP OF THE PARTIES</h5>
          <p>
            3.1 Independent Contractor. The designer is an independent
            contractor, not an employee of Client or any company affiliated with
            Client. The designer shall provide the Services under the general
            direction of Client, but Designer shall determine, in Designer’s
            sole discretion, the manner and means by which the Services are
            accomplished. This Agreement does not create a partnership or joint
            venture and neither party is authorized to act as an agent or bind
            the other party except as expressly stated in this Agreement.
            Designer and the work product or Deliverables prepared by Designer
            shall not be deemed a work for hire as that term is defined under
            Copyright Law. All rights, if any, granted to Client are contractual
            in nature and are wholly defined by the express written agreement of
            the parties and the various terms and conditions of this Agreement.
          </p>
          <p>
            3.2 No Exclusivity. The parties expressly acknowledge that this
            Agreement does not create an exclusive relationship between the
            parties. The client is free to engage others to perform services of
            the same or similar nature to those provided by Designer, and
            Designer shall be entitled to offer and provide design services to
            others, solicit other clients, and otherwise advertise the services
            offered by Designer.
          </p>
          <h5>4. WARRANTIES AND REPRESENTATIONS</h5>
          <p>
            (a) Client owns all right, title, and interest in, or otherwise has
            full right and authority to permit the use of the Client Content,
          </p>
          <p>
            (b) to the best of Client’s knowledge, the Client Content does not
            infringe the rights of any third party, and use of the Client
            Content, as well as any Trademarks in connection with the Project,
            does not and will not violate the rights of any third parties,
          </p>
          <div className="imagepolicy text-center">
            <img src="images/logo.png" alt="logo" />
        </div>
        </div>
      </Layout>
    </div>
  );
};

export default Policy;
