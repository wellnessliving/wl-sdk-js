/**
 * An endpoint that manipulates business design data.
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
   * The business design data.
   *
   * This data comes from the {@link RsBusinessDesign::data()} method.
   *
   * @get result
   * @type {{}}
   */
  this.a_data = undefined;

  /**
   * The business key used to get business design data.
   *
   * If `null`, the default business design data is returned.
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
 * @param {string} k_business The business key used to get business design data. If `null`, the default business design
 * data is returned.
 * @returns {Wl_Business_Design_BusinessDesignModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */