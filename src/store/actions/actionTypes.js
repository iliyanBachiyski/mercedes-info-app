import * as actions from "./actionConst";
import { IMAGE_URL } from "../../API_CONFIG";

export const fetchImages = () => {
  return dispatch => {
    fetch(IMAGE_URL)
      .then(resp => resp.json())
      .then(data => {
        dispatch(imagesActionCreator(data));
      });
  };
};

const imagesActionCreator = data => {
  return {
    type: actions.FETCH_IMAGES,
    payload: data
  };
};

export const fetchDealers = () => {
  return dispatch => {
    const data = {
      dealers: [
        {
          dealerId: "GS0041531",
          legalName: "Pyrénées Hèracles Industrials, S.L.",
          brands: [
            {
              code: "MB",
              name: "Mercedes-Benz"
            }
          ],
          geoCoordinates: {
            latitude: 42.437023,
            longitude: 1.475697
          },
          address: {
            street: "Ctra. General 1. Arenal Bordes del Cosp s/n",
            zipCode: "AD600",
            city: "Sant Juliá de Loria",
            countryIsoCode: "AD"
          },
          communicationChannels: {
            phone: "+376880800",
            fax: "+376880800",
            email: "vendes.pyreneesindustrials@pyrenees.ad"
          },
          functions: [
            {
              brand: {
                code: "MB",
                name: "Mercedes-Benz"
              },
              productGroup: {
                code: "VAN",
                name: "Van"
              },
              activity: {
                code: "SALES",
                name: "Sales"
              }
            },
            {
              brand: {
                code: "MB",
                name: "Mercedes-Benz"
              },
              productGroup: {
                code: "VAN",
                name: "Van"
              },
              activity: {
                code: "SERVICE",
                name: "Service"
              }
            },
            {
              brand: {
                code: "MB",
                name: "Mercedes-Benz"
              },
              productGroup: {
                code: "VAN",
                name: "Van"
              },
              activity: {
                code: "PARTS",
                name: "Parts"
              }
            }
          ],
          openingHours: [
            {
              function: {
                brand: {
                  code: "MB",
                  name: "Mercedes-Benz"
                },
                productGroup: {
                  code: "VAN",
                  name: "Van"
                },
                activity: {
                  code: "SERVICE",
                  name: "Service"
                }
              },
              weekdays: {
                WEDNESDAY: {
                  status: "CLOSED",
                  periods: []
                },
                MONDAY: {
                  status: "CLOSED",
                  periods: []
                },
                THURSDAY: {
                  status: "CLOSED",
                  periods: []
                },
                SUNDAY: {
                  status: "CLOSED",
                  periods: []
                },
                FRIDAY: {
                  status: "CLOSED",
                  periods: []
                },
                TUESDAY: {
                  status: "CLOSED",
                  periods: []
                },
                SATURDAY: {
                  status: "OPEN",
                  periods: [
                    {
                      from: "09:00:00",
                      until: "13:00:00"
                    }
                  ]
                }
              }
            }
          ],
          _links: {
            self: {
              href:
                "https://api.mercedes-benz.com/dealer/v1/dealers/GS0041531?apikey=<your_api_key>"
            }
          }
        }
      ],
      _links: {
        next: {
          href:
            "https://api.mercedes-benz.com/dealer/v1/dealers?page=2&apikey=<your_api_key>"
        },
        self: {
          href:
            "https://api.mercedes-benz.com/dealer/v1/dealers?apikey=<your_api_key>"
        }
      }
    };
    dispatch(dealersActionCreator(data));
    /*     fetch(DEALER_URL, {
      headers: new Headers({ accept: "application/json" })
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch(dealersActionCreator(data));
      }); */
  };
};

const dealersActionCreator = data => {
  return {
    type: actions.FETCH_DEALERS,
    payload: data
  };
};
