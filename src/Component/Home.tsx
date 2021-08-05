import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../data/dataCovid";
import { ItemValue } from "./ItemValue";

export default function Home() {
  const [item, setItem] = useState(data);

  React.useEffect(() => {
    fetch("https://static.easysunday.com/covid-19/getTodayCases.json")
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        console.log(data);
      });
  }, []);

  return (
    <ContainerPage>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header>จำนวนผู้ติดเชื้อ COVID-19 ในประเทศไทย</Header>
        <p style={{ marginTop: "0", textAlign: "end" }}>
          last Update {item.UpdateDate}
        </p>
        <Card>
          <CardSection style={{ gridArea: "case" }}>
            <HeaderSection>ผู้ติดเชื้อสะสม</HeaderSection>{" "}
            <ContainNumber>
              <ItemValue to={item.cases} />
            </ContainNumber>
            <ContainToday>
              <ItemValue to={item.NewConfirmed} today={true} />
            </ContainToday>
          </CardSection>

          <CardSection
            style={{
              gridArea: "recovered",
              background: "#7bff7b",
            }}
          >
            <HeaderSection>หายแล้ว</HeaderSection>{" "}
            <ContainNumber>
              <ItemValue to={item.recovered} />
            </ContainNumber>
            <ContainToday>
              <ItemValue to={item.NewRecovered} today={true} />
            </ContainToday>
          </CardSection>

          <CardSection
            style={{ gridArea: "hospitalized", background: "#fdff7a" }}
          >
            <HeaderSection>กำลังรักษา</HeaderSection>{" "}
            <ContainNumber>
              <ItemValue to={item.Hospitalized} />
            </ContainNumber>
            <ContainToday>
              <ItemValue to={item.NewHospitalized} today={true} />
            </ContainToday>
          </CardSection>

          <CardSection style={{ gridArea: "deaths", background: "#ff7474" }}>
            <HeaderSection>เสียชีวิต</HeaderSection>{" "}
            <ContainNumber>
              <ItemValue to={item.deaths} />
            </ContainNumber>
            <ContainToday>
              <ItemValue to={item.NewDeaths} today={true} />
            </ContainToday>
          </CardSection>
        </Card>
      </div>
      <ApiBy>API by {item.DevBy}</ApiBy>
    </ContainerPage>
  );
}

const Header = styled.h1`
  font-size: 2.25rem;
`;

const ContainNumber = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-weight: bolder;
  gap: 0.5rem;
  justify-content: center;
  && p {
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    && p {
      font-size: 3rem;
    }
  }
`;

const ContainToday = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  border-radius: 12px;
  border: 1px solid #111111;
  padding: 0.4rem;
  background: #111111;
  color: white;
  width: 6rem;
  && p {
    font-size: 16px;
  }
`;

const HeaderSection = styled.h4`
  margin: 0;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Card = styled.div`
  display: grid;
  width: 80vw;
  color: #111111;
  grid-gap: 1.5rem;
  grid-template-areas: "case" "recovered" "deaths" "hospitalized";
  & p {
    font-size: 12px;
  }

  @media (min-width: 768px) {
    grid-gap: 0.5rem;
    grid-row-gap: 1rem;
    min-width: 40vw;
    max-width: 100vw;
    padding: 1rem;
    grid-template-areas: "case case case " "recovered deaths hospitalized";
    & p {
      font-size: 24px;
    }
  }
`;

const CardSection = styled.div`
  position: relative;
  padding: 5rem 5rem 5rem;
  background-color: white;
  border-radius: 20px;
  min-width: 20vw;
  box-shadow: 7px 9px 11px 1px rgba(0, 0, 0, 0.34);
  @media (min-width: 768px) {
    padding: 2rem 1.5rem 3.5rem;
  }
`;

const ContainerPage = styled.div`
  display: grid;
  position: relative;
  min-height: 100vh;
  padding: 4rem 0;
  place-items: center;
  font-weight: 800;
  align-items: center;
  text-align: center;
  background: #292929;
  color: #dfdfdf;
  @media (min-width: 768px) {
    padding: 0 0 2rem;
  }
`;

const ApiBy = styled.p`
  position: absolute;
  bottom: 0;
  right: 1rem;
`;
