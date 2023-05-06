import React from 'react'
import termStyle from '../../styles/Terms.module.css';
export default function Terms() {
  
  return (
    <div className={termStyle.termMain}>
        <div className={termStyle.contentTitle}>
            <h4>Rabbitholebd Terms of Service</h4>
            <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the <i>https://www.rabbitholebd.com/</i>  website (the "Service") operated by rabbitholebd ("us", "we", or "our").</p>
        </div>

        <div tabIndex={0}  className={`${termStyle.colapseterm} collapse collapse-arrow  bg-base-100`}>
  <input type="checkbox" />
  <div className={`${termStyle.colapstitle} collapse-title text-xl font-medium`}>
    Access
  </div>
  <div tabIndex={0} className={`${termStyle.colapseContent} collapse-content`}>
    <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
  </div>
</div>


<div tabIndex={1}  className={`${termStyle.colapseterm} collapse collapse-arrow  bg-base-100`}>
  <input type="checkbox" />
  <div className={`${termStyle.colapstitle} collapse-title text-xl font-medium`}>
    governing law
  </div>
  <div tabIndex={1} className={`${termStyle.colapseContent} collapse-content`}>
    <p>These Terms shall be governed and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>
  </div>
</div>
    </div>
  )
}
