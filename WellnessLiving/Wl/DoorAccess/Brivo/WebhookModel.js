/**
 * Receives a Brivo door-access event.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_DoorAccess_Brivo_WebhookModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_DoorAccess_Brivo_WebhookModel);

/**
 * @inheritDoc
 */
Wl_DoorAccess_Brivo_WebhookModel.prototype.config=function()
{
  return {"a_field":{}};
};

/**
 * Receives a Brivo door-access event.
 *
 * Authenticates the request by the per-business webhook secret, then decodes the Brivo `AUDIT` event
 * payload and store the access fact and, when enabled, trigger an automatic check-in.
 * Access-denied and unrecognized events are ignored.
 *
 * @function
 * @name Wl_DoorAccess_Brivo_WebhookModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
