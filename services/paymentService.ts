
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
        orderId: `BD-${Date.now()}`
      }
    ],
    return_url: window.location.href,
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error('Erreur réseau lors de l\'initiation');
    return await response.json();
  } catch (error) {
    console.error("Payment Initiation Error:", error);
    throw error;
  }
};

export const checkStatus = async (token: string) => {
  try {
    const response = await fetch(`${STATUS_URL}${token}`);
    if (!response.ok) throw new Error('Erreur de vérification');
    return await response.json();
  } catch (error) {
    console.error("Status Check Error:", error);
    throw error;
  }
};
