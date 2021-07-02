/**
 * Processes requests of the franchise region.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Franchise_Region_RegionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of location.
   *
   * @post post
   * @type {{}}
   */
  this.a_location = undefined;

  /**
   * Business key. Primary key in the {@link \RsBusinessSql} table.
   *
   * @delete get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Franchise region key. Primary key in the {@link \Wl\Business\Franchise\Region\RegionSql} table.
   * If <tt>null</tt> need create franchise region.
   *
   * @delete get
   * @post get,result
   * @type {?string}
   */
  this.k_franchise_region = null;

  /**
   * Staff key. Primary key in the {@link \RsStaffSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_staff = undefined;

  /**
   * Region description.
   *
   * @post post
   * @type {string}
   */
  this.text_description = undefined;

  /**
   * Region name.
   *
   * @post post
   * @type {string}
   */
  this.text_title = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Franchise_Region_RegionModel);

/**
 * @inheritDoc
 */
Wl_Business_Franchise_Region_RegionModel.prototype.config=function()
{
  return {"a_field": {"a_location": {"post": {"post": true}},"k_business": {"delete": {"get": true},"post": {"get": true}},"k_franchise_region": {"delete": {"get": true},"post": {"get": true,"result": true}},"k_staff": {"post": {"post": true}},"text_description": {"post": {"post": true}},"text_title": {"post": {"post": true}}}};
};