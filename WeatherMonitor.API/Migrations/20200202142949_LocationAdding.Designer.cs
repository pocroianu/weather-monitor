﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WeatherMonitor.API.Data;

namespace WeatherMonitor.API.Migrations
{
    [DbContext(typeof(WeatherData))]
    [Migration("20200202142949_LocationAdding")]
    partial class LocationAdding
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.0");

            modelBuilder.Entity("WeatherMonitor.API.ConditionsModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<int>("HighestTemperature")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Location")
                        .HasColumnType("TEXT");

                    b.Property<int>("LowestTemperature")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Precipitation")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Summary")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("WeatherForecasts");
                });

            modelBuilder.Entity("WeatherMonitor.API.Models.LocationModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("LocationModels");
                });
#pragma warning restore 612, 618
        }
    }
}
