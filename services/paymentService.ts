const API_URL = "https://www.pay.moneyfusion.net/BD_antropic/676ffa5dfafba0d6/pay/";

export interface PaymentRequest {
  totalPrice: number;
  numeroSend: string;
  nomclient: string;
  email: string;
}

export const initiatePayment = async (data: PaymentRequest) => {
  // On utilise l'origine actuelle pour le retour
  const returnUrl = window.location.origin;

  const payload = {
    totalPrice: data.totalPrice,
    article: [
      {
        "pack": "Collection Intégrale 6 BDs",
        "price": data.totalPrice
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
    return_url: returnUrl,
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