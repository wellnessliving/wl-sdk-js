/**
 * Reorganize periods of the event between event instances.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Event_EventReorganizeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "a_class_period,k_class";

  /**
   * List of the class periods' keys which should be reorganized.
   *
   * @post post
   * @type {string[]}
   */
  this.a_class_period = undefined;

  /**
   * Class key.
   * Destination class.
   *
   * @post post
   * @type {string}
   */
  this.k_class = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Event_EventReorganizeModel);

/**
 * @inheritDoc
 */
Wl_Event_EventReorganizeModel.prototype.config=function()
{
  return {"a_field": {"a_class_period": {"post": {"post": true}},"k_class": {"post": {"post": true}}}};
};

/**
 * @function
 * @name Wl_Event_EventReorganizeModel.instanceGet
 * @param {string[]} a_class_period List of the class periods' keys which should be reorganized.
 * @param {string} k_class Class key. Destination class.
 * @returns {Wl_Event_EventReorganizeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */