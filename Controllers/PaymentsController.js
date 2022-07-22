// Creamos la clase
class PaymentController {
  // Que tenga un constructor
  constructor(subscriptionService) {
    // para instanciar el servicio que en el index tenemos en la línea 6
    this.subscriptionService = subscriptionService;
  }

  // Acá tenemos nuestras dos funciones que se llaman getPaymentLink y getSubscriptionLink

  // En este nosotros vamos a hacer un try catch nada más pero vamos a ejecutar las dos dos funciones que van a estar en el service

  // Las dos funciones se llaman createPayment (esta hace el request de los pagos únicos) y createSubscription (esta hace el request de los pagos recurrentes/ suscripciones)
  async getPaymentLink(req, res) {
    try {
      const payment = await this.subscriptionService.createPayment();

      return res.json(payment);
    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .json({ error: true, msg: "Failed to create payment" });
    }
  }

  // En este nosotros vamos a hacer un try catch nada más
  async getSubscriptionLink(req, res) {
    try {
      const subscription = await this.subscriptionService.createSubscription();

      return res.json(subscription);
    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .json({ error: true, msg: "Failed to create subscription" });
    }
  }
}

module.exports = PaymentController;
