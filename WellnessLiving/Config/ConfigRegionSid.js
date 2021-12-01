// @after Core/Request/Api/Sdk/AssertException.js
// @before Config/ConfigAbstractMixin.js

/**
 * List of available regions.
 *
 * The business independently chooses the region in which it will be registered.
 * The choice of the region does not depend on the actual location of the business.
 * The region determines the data center in which the Wellnessliving system operates.
 * The region should be chosen based on the access speed to the data center from business clients.
 *
 * All businesses registered before December 2021 belong to the {@link WlSdk_Config_ConfigRegionSid.US_EAST_1} region.
 *
 * Last ID: 2.
 */
function WlSdk_Config_ConfigRegionSid()
{
  // Empty constructor.
}

/**
 * Sydney, Australia.
 *
 * @type {number}
 */
WlSdk_Config_ConfigRegionSid.AP_SOUTHEAST_2=2;

/**
 * North Virginia, USA.
 *
 * @type {number}
 */
WlSdk_Config_ConfigRegionSid.US_EAST_1=1;

/**
 * Checks for the existence of a region id.
 * @param {number} id_region Region id.
 */
WlSdk_Config_ConfigRegionSid.regionExists = function(id_region)
{
  switch(id_region)
  {
    case WlSdk_Config_ConfigRegionSid.AP_SOUTHEAST_2:
    case WlSdk_Config_ConfigRegionSid.US_EAST_1:
      return true;
  }

  return false;
}