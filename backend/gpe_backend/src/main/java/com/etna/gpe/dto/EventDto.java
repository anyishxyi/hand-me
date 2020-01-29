package com.etna.gpe.dto;

import org.springframework.lang.NonNull;

import com.etna.gpe.model.Category;
import com.etna.gpe.model.Community;
import com.etna.gpe.model.Event;
import com.etna.gpe.model.EventMaker;

public class EventDto {
	
	int eventId;
	String eventTitle;
	String eventDescription;
	String eventCreateDate;
	String eventUpdateDate;
	String eventDeleteDate;
	String eventPlace;
	String eventDate;
	boolean eventIsDeleted;
	EventMaker eventMaker;
	Community community;
	Category category;
	
	

	protected EventDto() {
	}
	
	public EventDto(@NonNull Event event) {
		this.setCategory(event.getCategory());
		this.setCommunity(event.getCommunity());
		this.setEventCreateDate(event.getEventCreateDate());
		this.setEventDate(event.getEventDate());
		this.setEventDeleteDate(event.getEventDeleteDate());
		this.setEventDescription(event.getEventDescription());
		this.setEventId(event.getEventId());
		this.setEventIsDeleted(event.isEventIsDeleted());
		this.setEventMaker(event.getEventMaker());
		this.setEventPlace(event.getEventPlace());
		this.setEventTitle(event.getEventTitle());
		this.setEventUpdateDate(event.getEventUpdateDate());
	}
	
	

	@Override
	public String toString() {
		return "EventDto [eventId=" + eventId + ", eventTitle=" + eventTitle + ", eventDescription=" + eventDescription
				+ ", eventCreateDate=" + eventCreateDate + ", eventUpdateDate=" + eventUpdateDate + ", eventDeleteDate="
				+ eventDeleteDate + ", eventPlace=" + eventPlace + ", eventDate=" + eventDate + ", eventIsDeleted="
				+ eventIsDeleted + ", eventMaker=" + eventMaker + ", community=" + community + ", category=" + category
				+ "]";
	}

	public int getEventId() {
		return eventId;
	}

	public void setEventId(int eventId) {
		this.eventId = eventId;
	}

	public String getEventTitle() {
		return eventTitle;
	}

	public void setEventTitle(String eventTitle) {
		this.eventTitle = eventTitle;
	}

	public String getEventDescription() {
		return eventDescription;
	}

	public void setEventDescription(String eventDescription) {
		this.eventDescription = eventDescription;
	}

	public String getEventCreateDate() {
		return eventCreateDate;
	}

	public void setEventCreateDate(String eventCreateDate) {
		this.eventCreateDate = eventCreateDate;
	}

	public String getEventUpdateDate() {
		return eventUpdateDate;
	}

	public void setEventUpdateDate(String eventUpdateDate) {
		this.eventUpdateDate = eventUpdateDate;
	}

	public String getEventDeleteDate() {
		return eventDeleteDate;
	}

	public void setEventDeleteDate(String eventDeleteDate) {
		this.eventDeleteDate = eventDeleteDate;
	}

	public String getEventPlace() {
		return eventPlace;
	}

	public void setEventPlace(String eventPlace) {
		this.eventPlace = eventPlace;
	}

	public String getEventDate() {
		return eventDate;
	}

	public void setEventDate(String eventDate) {
		this.eventDate = eventDate;
	}

	public boolean isEventIsDeleted() {
		return eventIsDeleted;
	}

	public void setEventIsDeleted(boolean eventIsDeleted) {
		this.eventIsDeleted = eventIsDeleted;
	}

	public EventMaker getEventMaker() {
		return eventMaker;
	}

	public void setEventMaker(EventMaker eventMaker) {
		this.eventMaker = eventMaker;
	}

	public Community getCommunity() {
		return community;
	}

	public void setCommunity(Community community) {
		this.community = community;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

}
