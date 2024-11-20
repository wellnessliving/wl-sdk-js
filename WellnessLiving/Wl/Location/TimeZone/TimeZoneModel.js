/**
 * Retrieves time zone information.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_TimeZone_TimeZoneModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Location_TimeZone_TimeZoneModel_a_timezone
   * @property {?number} i_dst_offset Maximum daylight savings offset in seconds. A value of 3600 indicates this location uses daylight savings time, <tt>null</tt> if no dst info requested.
   * @property {number} i_raw_offset The timezone's offset in seconds from UTC. Not all time zones will be evenly divisible by 3600.
   * @property {string} text_time_zone_name The time zone's name.
   */

  /**
   * Time zone information.
   * Relevant parts of the geo code request result: <dl>
   *   <dt>int|null <var>i_dst_offset</var></dt>
   *   <dd>Maximum daylight savings offset in seconds. A value of 3600 indicates this location uses daylight savings time, <tt>null</tt> if no dst info requested.</dd>
   *   <dt>int <var>i_raw_offset</var></dt>
   *   <dd>The timezone's offset in seconds from UTC. Not all time zones will be evenly divisible by 3600.</dd>
   *   <dt>string <var>text_time_zone_name</var></dt>
   *   <dd>The time zone's name.</dd>
   * </dl>
   *
   * <tt>null</tt> if no result.
   *
   * @post result
   * @type {?Wl_Location_TimeZone_TimeZoneModel_a_timezone}
   */
  this.a_timezone = null;

  /**
   * Location's address.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {?string}
   */
  this.text_location = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_TimeZone_TimeZoneModel);

/**
 * @inheritDoc
 */
Wl_Location_TimeZone_TimeZoneModel.prototype.config=function()
{
  return {"a_field": {"a_timezone": {"post": {"result": true}},"text_location": {"post": {"post": true}}}};
};