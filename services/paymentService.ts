
const API_URL = "https://www.pay.moneyfusion.net/BD_antropic/676ffa5dfafba0d6/pay/";
const STATUS_URL = "https://www.pay.moneyfusion.net/paiementNotif/";

export interface PaymentRequest {
  totalPrice: number;
  numeroSend: string;
  nomclient: string;
  email: string;
}

export const initiatePayment = async (data: PaymentRequest) => {
  const payload = {
    totalPrice: data.totalPrice,
    article: [
      {
        "Collection Complete 6 BDs": data.totalPrice
      }
    ],
    numeroSend: data.numeroSend,
    nomclient: data.nomclient,
    personal_Info: [
      {
        email: data.email,
        orderDate: new Date().toISOString()
      }
    ],
    return_url: window.location.href, // Redirige ici après le paiement
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    if (!response.ok) throw new Error('Erreur lors de l\'initiation du paiement');
    
    return await response.json();
  } catch (error) {
    console.error("Payment Error:", error);
    throw error;
  }
};

export const checkStatus = async (token: string) => {
  try {
    const response = await fetch(`${STATUS_URL}${token}`);
    if (!response.ok) throw new Error('Erreur lors de la vérification');
    return await response.json();
  } catch (error) {
    console.error("Status Check Error:", error);
    throw error;
  }
};
