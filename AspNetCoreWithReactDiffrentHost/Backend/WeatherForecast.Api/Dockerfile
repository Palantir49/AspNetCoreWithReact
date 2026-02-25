FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

COPY Directory.Packages.props .

COPY "AspNetCoreWithReactDiffrentHost/Backend/WeatherForecast.Api/WeatherForecast.Api.csproi" "AspNetCoreWithReactDiffrentHost/Backend/WeatherForecast.Api/"

RUN dotnet restore "AspNetCoreWithReactDiffrentHost/Backend/WeatherForecast.Api/WeatherForecast.Api.csproj"

COPY . .

WORKDIR "/src/AspNetCoreWithReactDiffrentHost/Backend/WeatherForecast.Api"
RUN dotnet build "./WeatherForecast.Api.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./WeatherForecast.Api.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "WeatherForecast.Api.dll"]