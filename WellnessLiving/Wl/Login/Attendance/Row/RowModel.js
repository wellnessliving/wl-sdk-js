/**
 * Loads data for single attendance list row.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Attendance_Row_RowModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_visit";

  /**
   * Service image.
   *
   * @get result
   * @type {?{}}
   */
  this.a_row = null;

  /**
   * Date.
   *
   * @get get
   * @type {string}
   */
  this.dtu_date = undefined;

  /**
   * Visit key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Visit key.
   *
   * @get get
   * @type {string}
   */
  this.k_visit = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Attendance_Row_RowModel);

/**
 * @inheritDoc
 */
Wl_Login_Attendance_Row_RowModel.prototype.config=function()
{
  return {"a_field": {"a_row": {"get": {"result": true}},"dtu_date": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_visit": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Login_Attendance_Row_RowModel.instanceGet
 * @param {string} k_business Visit key.
 * @param {string} k_visit Visit key.
 * @returns {Wl_Login_Attendance_Row_RowModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */