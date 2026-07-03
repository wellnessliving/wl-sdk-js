/**
 * Gets information about class.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_Info_InfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_class";

  /**
   * @typedef {{}} Wl_Classes_Info_InfoModel_a_logo
   * @property {boolean} is_empty Whether service image is empty.
   * @property {string} s_url Url link to image.
   */

  /**
   * Service logo information:
   *
   * @get result
   * @type {Wl_Classes_Info_InfoModel_a_logo}
   */
  this.a_logo = undefined;

  /**
   * `true` means event, `false` means class.
   *
   * @get result
   * @type {boolean}
   */
  this.is_event = undefined;

  /**
   * Key of the business in which the class resides.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Class identifier to get information for.
   *
   * @get get
   * @type {string}
   */
  this.k_class = "";

  /**
   * Title of the class.
   *
   * @get result
   * @type {string}
   */
  this.text_title = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_Info_InfoModel);

/**
 * @inheritDoc
 */
Wl_Classes_Info_InfoModel.prototype.config=function()
{
  return {"a_field":{"a_logo":{"get":{"result":true}},"is_event":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_class":{"get":{"get":true}},"text_title":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Classes_Info_InfoModel.instanceGet
 * @param {string} k_business Key of the business in which the class resides.
 * @param {string} k_class Class identifier to get information for.
 * @returns {Wl_Classes_Info_InfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets information about class.
 *
 * Returns the class title, service logo, and whether the class is actually an event, based on the
 * given business and class keys.
 *
 * @function
 * @name Wl_Classes_Info_InfoModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
