exports.marketplacePurchaseEmail = (itemName, name) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Marketplace Purchase Notification</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href=""><img class="logo" src=""
                    alt="<Marketplace Logo>"></a>
            <div class="message">Marketplace Purchase Notification</div>
            <div class="body">
                <p>Dear ${name},</p>
                <p>Someone is interested in purchasing your item <span class="highlight">"${itemName}"</span> on the Marketplace. They want to see more details before making the purchase.</p>
                <p>Please log in to your Marketplace account to provide more information about the item.</p>
                <a class="cta" href="">Go to Marketplace</a>
            </div>
            <div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a
                    href="mailto:info@marketplace.com">info@marketplace.com</a>. We are here to help!</div>
        </div>
    </body>
    
    </html>`;
};
