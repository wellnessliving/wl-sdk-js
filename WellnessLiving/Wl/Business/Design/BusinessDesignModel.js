/**
 * API point to manipulate business design data.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Design_BusinessDesignModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Business design data.
   *
   * Result of the {@link \RsBusinessDesign::data()} method.
   *
   * @get result
   * @type {{}}
   */
  this.a_data = undefined;

  /**
   * Business key to get business design data.
   *
   * May be <tt>null</tt>. In this case default business design data is returned.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Design_BusinessDesignModel);

/**
 * @inheritDoc
 */
Wl_Business_Design_BusinessDesignModel.prototype.config=function()
{
  return {"a_field": {"a_data": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Business_Design_BusinessDesignModel.instanceGet
 * @param {string} k_business Business key to get business design data. May be <tt>null</tt>. In this case default business design data is returned.
 * @returns {Wl_Business_Design_BusinessDesignModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */