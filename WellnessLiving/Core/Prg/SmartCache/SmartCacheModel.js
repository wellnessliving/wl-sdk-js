/**
 * Api for run smart cache.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Prg_SmartCache_SmartCacheModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * See {@link SmartCache::$is_change_js} for documentation.
   *
   * @get result
   * @type {boolean}
   */
  this.is_change_js = undefined;

  /**
   * See {@link SmartCache::$is_change_less} for documentation.
   *
   * @get result
   * @type {boolean}
   */
  this.is_change_less = undefined;

  /**
   * See {@link SmartCache::$is_change_opcache} for documentation.
   *
   * @get result
   * @type {boolean}
   */
  this.is_change_opcache = undefined;

  /**
   * <tt>true</tt> if use redirect, <tt>false</tt> otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_redirect = false;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Prg_SmartCache_SmartCacheModel);

/**
 * @inheritDoc
 */
Core_Prg_SmartCache_SmartCacheModel.prototype.config=function()
{
  return {"a_field": {"is_change_js": {"get": {"result": true}},"is_change_less": {"get": {"result": true}},"is_change_opcache": {"get": {"result": true}},"is_redirect": {"get": {"get": true}}}};
};