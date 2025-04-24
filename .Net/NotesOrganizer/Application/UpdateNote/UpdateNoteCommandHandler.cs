using Application.Abstractions;
using Application.Exceptions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Application.UpdateNote;

public class UpdateNoteCommandHandler(IApplicationDbContext dbContext, ILogger<UpdateNoteCommandHandler> logger) : IRequestHandler<UpdateNoteCommand>
{
    public async Task Handle(UpdateNoteCommand request, CancellationToken cancellationToken)
    {
        var note = await dbContext.Notes.SingleOrDefaultAsync(x => x.Id == request.NoteId, cancellationToken);

        if (note == null)
        {
            logger.LogWarning("Attempted to update a note that does not exist. Note ID: {NoteId}", request.NoteId);
            throw new NotFoundException($"Note with ID {request.NoteId} not found.");
        }

        if (string.IsNullOrWhiteSpace(request.Content))
        {
            logger.LogWarning("Attempted to update a note with empty content. Note ID: {NoteId}", request.NoteId);
            throw new InvalidOperationException("Note content cannot be empty.");
        }

        if (string.IsNullOrWhiteSpace(request.Title))
        {
            logger.LogWarning("Attempted to update a note with empty title. Note ID: {NoteId}", request.NoteId);
            throw new InvalidOperationException("Note title cannot be empty.");
        }

        note.Content = request.Content;
        note.Title = request.Title;
        note.UpdatedAt = DateTime.UtcNow;

        dbContext.Notes.Update(note);
        await dbContext.SaveChangesAsync(cancellationToken);
    }
}