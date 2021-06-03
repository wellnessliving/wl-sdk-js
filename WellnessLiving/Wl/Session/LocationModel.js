/**
 * This API is dedicated to save into session location selected by guest.
 *
 * It is forbidden to use sessions in application.
 *
 * But we must save location to define business member of which must became user after authorisation/registration.
 *
 * So usage of session is only way.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Session_LocationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Location selected when application was started.
   * Primary key in {@link \RsLocationSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_location = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Session_LocationModel);

/**
 * @inheritDoc
 */
Wl_Session_LocationModel.prototype.config=function()
{
  return {"a_field": {"k_location": {"post": {"post": true}}}};
};