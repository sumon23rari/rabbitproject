import React from 'react'
import gdpStyle from '../../styles/Gdp.module.css';
export default function Gdpr() {
  return (
    <div className={gdpStyle.gdpMain}>
        <div className="grid grid-cols-12">
            <div className="col-span-12">
                <div className={gdpStyle.contentTitle}>
                <h4>General Data Protection Regulation (GDPR)</h4>
                <p>If you want to delete your activities for Rabbithole App, you can remove your information by following these steps:</p>
                <ol className='pl-5'>
                    <li>Go to your Profile menu and click GDPR (General Data Protection Regulation) from the drop-down menu.
</li>
                    <li>You need to stop “Auto Renew” if it is activated to your service before deleting your Rabbithole account. So, enable Stop Auto Renew checkbox and click Continue to Account Deletion button.</li>
                    <li>In the next page it will prompt with a Radio Button with a reminder that “This is permanent. When you delete your Rabbithole account, you won’t be able to retrieve the content or information you’ve shared on Rabbithole”</li>
                    <li>Another reminder page will appear and you will be prompt “If you want to permanently delete your Rabbithole account, let us know. Once the deletion process begins, you won’t be able to reactivate your account or retrieve any of the content or information you have added”. Click Delete Account button.</li>
                    <li>Final warning page will appear of Data deletion.</li>
                    <li>After clicking the Delete button you will get confirmation of your data deletion.</li>
                </ol>
            </div>
            </div>
        </div>
    </div>
  )
}
