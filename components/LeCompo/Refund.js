import Link from 'next/link'
import React from 'react'
import refundStyle from '../../styles/refund.module.css';
export default function Refund() {
  return (
    <div className={refundStyle.refundMain}>
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className={refundStyle.contentTitle}>
              <p>Last updated: January 18, 2022</p>
              <h4>Refund & Return Policy</h4>
              <p>Rabbithole subscribers are eligible to have refund subject to the below scenarios and subscribers can share their complaints/query about the charging or search any other help about services through the below channels:</p>
              <p>
                1.email to <Link href="support@rabbitholebd.com" className='text-orange'>support@rabbitholebd.com</Link> <br />
                2.dial hotline: <Link href="09603008899" className='text-orange'>09603008899</Link> (Everyday 9 AM to 12 AM) <br />
                3.  Visit Facebook chatbot page: <Link href="https://www.facebook.com/rabbitholebd" target="_blank" className="text-orange">https://www.facebook.com/rabbitholebd</Link>  (typically replies within 5 minutes) <br />
                4.Subscribers are charged but due to technical problem of Rabbithole he/she was not able to access the contents, in this case upon verification, subscribers will be refunded the full charged amount.
                5.A refund request must be raised within 14 days from the date of the recent subscription charge
                6.If subscribers are found eligible for refund then subscribers will get their charged amount within 7 working days start from the date they submit the complaint.
                7. Eligible subscribers will get their refund from the respective carriers they have initiated the charging. 
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}
